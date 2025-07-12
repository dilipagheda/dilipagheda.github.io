import React, { useEffect, useState } from 'react';
import resumeData from '../../data/comprehensive-resume.json';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faPhone, faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand, faGithub as faGithubBrand, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../../sass/comprehensive-resume.scss';

// Helper to extract contact info from the text
function extractContactInfo(text) {
  const emailMatch = text.match(/Email\s*([\w._%+-]+@[\w.-]+\.[A-Za-z]{2,})/i);
  const phoneMatch = text.match(/Phone\s*([\d\s+()-]+)/i);
  const linkedinMatch = text.match(/Linkedin\s*(https?:\/\/[^\s]+)/i);
  const githubMatch = text.match(/Github\s*(https?:\/\/[^\s]+)/i);
  const nameMatch = text.match(/^(Dilip Agheda)/m);
  return {
    name: nameMatch ? nameMatch[1] : '',
    email: emailMatch ? emailMatch[1] : '',
    phone: phoneMatch ? phoneMatch[1] : '',
    linkedin: linkedinMatch ? linkedinMatch[1] : '',
    github: githubMatch ? githubMatch[1] : '',
  };
}

const INFO_LABELS_PLACEHOLDER = '__INFO_LABELS__';

// Helper to format the resume text into sections, headings, bullets, etc.
function formatResumeText(text) {
  const lines = text.split(/\r?\n/);
  const elements = [];
  let currentSection = [];
  let bullets = [];
  let paraBuffer = [];

  function flushParagraph() {
    if (paraBuffer.length > 0) {
      currentSection.push(
        <p className="resume-paragraph mb-1" key={`para-${elements.length}-${currentSection.length}`}>{paraBuffer.join(' ')}</p>
      );
      paraBuffer = [];
    }
  }

  function pushSection() {
    flushParagraph();
    if (bullets.length > 0) {
      currentSection.push(
        <ul className="resume-bullets" key={`ul-${elements.length}`}>{bullets}</ul>
      );
      bullets = [];
    }
    if (currentSection.length > 0) {
      elements.push(<div className="resume-section mb-4" key={elements.length}>{currentSection}</div>);
      currentSection = [];
    }
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      pushSection();
      return;
    }
    // Main heading (name)
    if (idx === 0 && trimmed.match(/^Dilip Agheda/i)) {
      pushSection();
      elements.push(
        <h1 className="resume-main-heading text-center mb-2" key="main-heading">{trimmed}</h1>
      );
      return;
    }
    // Section headings (all caps, short)
    if (/^[A-Z][A-Z\s]+$/.test(trimmed) && trimmed.length < 40) {
      pushSection();
      currentSection.push(
        <h2 className="resume-section-heading mt-4 mb-3" key={`section-${idx}`}>{trimmed}</h2>
      );
      return;
    }
    // Sub-section headings (Title Case or ends with ':')
    if (/^[A-Z][a-z]+( [A-Z][a-z]+)*:?$/.test(trimmed) || trimmed.endsWith(':')) {
      pushSection();
      currentSection.push(
        <h4 className="resume-subheading mt-3 mb-2" key={`subheading-${idx}`}>{trimmed.replace(/:$/, '')}</h4>
      );
      return;
    }
    // Bullet points
    if (/^(•|-|\*)\s+/.test(trimmed)) {
      flushParagraph();
      bullets.push(
        <li key={`bullet-${idx}`}>{trimmed.replace(/^(•|-|\*)\s+/, '')}</li>
      );
      return;
    }
    // If in bullets but line is not a bullet, close the list
    if (bullets.length > 0) {
      currentSection.push(
        <ul className="resume-bullets" key={`ul-${idx}`}>{bullets}</ul>
      );
      bullets = [];
    }
    // Default: accumulate for paragraph
    paraBuffer.push(trimmed);
  });
  // Push any remaining section
  pushSection();
  return elements;
}

// Helper to extract contact/info links and values from the text
function extractInfoLabels(text) {
  // Regex for label-value pairs
  const patterns = [
    { label: 'GitHub', regex: /Github\s*(https?:\/\/github\.com\/[\w-]+)/i, display: 'GitHub', short: url => url.replace('https://github.com/', 'github.com/') },
    { label: 'Portfolio', regex: /Portfolio\s*(https?:\/\/[\w.-]+\.[\w]{2,}(?:\/[\w\/-]*)?)/i, display: 'Portfolio', short: url => 'Portfolio' },
    { label: 'LinkedIn', regex: /Linkedin\s*(https?:\/\/www\.linkedin\.com\/[^\s]+)/i, display: 'LinkedIn', short: url => 'LinkedIn' },
    { label: 'StackOverflow', regex: /Stackoverflow\s*(https?:\/\/stackoverflow\.com\/users\/\d+\/[^\s]+)/i, display: 'StackOverflow', short: url => 'StackOverflow' },
    { label: 'Phone', regex: /Phone\s*([\d\s+()-]{8,})/i, display: 'Phone', short: v => v },
    { label: 'Email', regex: /Email\s*([\w._%+-]+@[\w.-]+\.[A-Za-z]{2,})/i, display: 'Email', short: v => v },
  ];
  const found = [];
  let cleanedText = text;
  let phone = null, email = null;
  patterns.forEach(({ label, regex, display, short }) => {
    const match = cleanedText.match(regex);
    if (match) {
      if (label === 'Phone') phone = match[1];
      else if (label === 'Email') email = match[1];
      else found.push({ label: display, value: match[1], short: short(match[1]) });
      cleanedText = cleanedText.replace(match[0], '');
    }
  });
  return { labels: found, cleanedText, phone, email };
}

const ComprehensiveResume = () => {
  const [resumeText, setResumeText] = useState('');
  const [contact, setContact] = useState({});
  const [infoLabels, setInfoLabels] = useState([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (resumeData.pages && resumeData.pages.length > 0) {
      let text = resumeData.pages.map(p => p.content).join('\n');
      const { labels, cleanedText, phone, email } = extractInfoLabels(text);
      setInfoLabels(labels);
      setResumeText(cleanedText);
      setContact(extractContactInfo(cleanedText));
      setPhone(phone);
      setEmail(email);
    }
  }, []);

  // Update infoLabelsComponent to be a single horizontal row, centered
  const infoLabelsComponent = infoLabels.length > 0 && (
    <div className="resume-info-labels mb-3 d-flex flex-row justify-content-center align-items-center flex-wrap" style={{gap: '1.2rem'}}>
      {infoLabels.map(({ label, value }, idx) => {
        if (label === 'Portfolio' && /^https?:\/\/dilipagheda\.com(\/|#|$)/.test(value)) return null;
        let href = value;
        let icon = null;
        let iconProps = { style: { fontSize: '1.7em', transition: 'color 0.2s' }, className: 'mx-2 info-link-icon' };
        if (label === 'GitHub') icon = <FontAwesomeIcon icon={faGithubBrand} {...iconProps} />;
        if (label === 'Portfolio') icon = <FontAwesomeIcon icon={faDownload} {...iconProps} />;
        if (label === 'LinkedIn') icon = <FontAwesomeIcon icon={faLinkedinBrand} {...iconProps} />;
        if (label === 'StackOverflow') icon = <FontAwesomeIcon icon={faStackOverflow} {...iconProps} />;
        return (
          <a href={href} key={label+idx} target="_blank" rel="noopener noreferrer" className="info-link-icon-wrapper" style={{textDecoration: 'none'}}>
            {icon}
          </a>
        );
      })}
    </div>
  );

  const resumeContent = resumeText ? formatResumeText(resumeText) : [];
  const renderedContent = resumeContent.map((el, idx) =>
    el === INFO_LABELS_PLACEHOLDER ? <React.Fragment key={"info-labels"}>{infoLabelsComponent}</React.Fragment> : el
  );

  return (
    <div className="comprehensive-resume polished-resume">
      {/* Sticky Header */}
      <div className="resume-sticky-header shadow-sm bg-white py-3 mb-4 sticky-top">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h2 className="mb-0">{contact.name}</h2>
            </Col>
            <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
              {contact.email && (
                <span className="me-3"><FontAwesomeIcon icon={faEnvelope} className="me-1" />{contact.email}</span>
              )}
              {contact.phone && (
                <span className="me-3"><FontAwesomeIcon icon={faPhone} className="me-1" />{contact.phone}</span>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none resume-social-link">
                  <FontAwesomeIcon icon={faLinkedinBrand} size="lg" className="fa-linkedin" />
                </a>
              )}
              {contact.github && (
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none resume-social-link">
                  <FontAwesomeIcon icon={faGithubBrand} size="lg" className="fa-github" />
                </a>
              )}
              <a href={require('../../data/Dilip Agheda Resume 2024.pdf')} download className="btn btn-sm ms-2 download-btn">
                <FontAwesomeIcon icon={faDownload} className="me-1" /> Download PDF
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Card className="p-4 shadow-lg resume-card">
              <div className="resume-content">
                {resumeContent.length > 0 ? resumeContent.map((el, idx) => {
                  if (el && el.type === 'h1' && el.props && el.props.children === contact.name) {
                    return <React.Fragment key={idx}>
                      {el}
                      {(phone || email) && (
                        <>
                          <div className="resume-contact-undername d-flex flex-column align-items-center mb-2" style={{fontSize: '0.98rem', color: '#666'}}>
                            {phone && <span className="mb-1"><FontAwesomeIcon icon={faPhone} className="me-1" style={{fontSize: '0.95em'}} /><a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-decoration-underline text-muted">{phone}</a></span>}
                            {email && <span><FontAwesomeIcon icon={faEnvelope} className="me-1" style={{fontSize: '0.95em'}} /><a href={`mailto:${email}`} className="text-decoration-underline text-muted">{email}</a></span>}
                          </div>
                          {infoLabelsComponent}
                        </>
                      )}
                    </React.Fragment>;
                  }
                  return el;
                }) : <p>Loading...</p>}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComprehensiveResume; 