import React from 'react';
import nodejsAppDevBadge from '../data/images/nodejs-appdev-badge.png';
import nodejsServDevBadge from '../data/images/nodejs-servdev-badge.png';

const LinuxFoundationCerts = (props) => {
    return (
        <>
            {props.certifications.items.map((cert, index) => (
                <div key={index} className="col-12 col-md-6 mb-4">
                    <div className="lf-cert-card">
                        <div className="lf-cert-header">
                            <div className="lf-logo">
                                {cert.title.includes("Application Developer") ? (
                                    <img 
                                        src={nodejsAppDevBadge}
                                        alt="Node.js Application Developer Badge"
                                        width="60"
                                        height="60"
                                        style={{ borderRadius: '50%' }}
                                    />
                                ) : cert.title.includes("Services Developer") ? (
                                    <img 
                                        src={nodejsServDevBadge}
                                        alt="Node.js Services Developer Badge"
                                        width="60"
                                        height="60"
                                        style={{ borderRadius: '50%' }}
                                    />
                                ) : (
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0z" fill="#FCC624"/>
                                        <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" fill="#000"/>
                                        <path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8z" fill="#FCC624"/>
                                        <circle cx="20" cy="20" r="6" fill="#000"/>
                                    </svg>
                                )}
                            </div>
                            <div className="lf-cert-badge">
                                <span className="lf-badge-text">CERTIFIED</span>
                            </div>
                        </div>
                        <div className="lf-cert-body">
                            <h4 className="lf-cert-title">{cert.title}</h4>
                            <div className="lf-cert-meta">
                                <span className="lf-issuer">{cert.issuer}</span>
                                <span className="lf-date">{cert.date}</span>
                            </div>
                            <div className="lf-cert-category">{cert.category}</div>
                            <p className="lf-cert-description">{cert.description}</p>
                            <div className="lf-cert-details">
                                <div className="lf-detail-item">
                                    <strong>Credential ID:</strong> {cert.credentialId}
                                </div>
                                <div className="lf-detail-item">
                                    <strong>Valid Until:</strong> {cert.validUntil}
                                </div>
                                <div className="lf-detail-item">
                                    <strong>Exam:</strong> {cert.examDuration} • {cert.examType}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default LinuxFoundationCerts; 