import React from 'react';
import treehouseSeal from '../data/images/treehouse-techdegree-seal.webp';

const TreehouseCerts = (props) => {
    console.log('TreehouseCerts props:', props);
    console.log('bootcamps:', props.bootcamps);
    
    if (!props.bootcamps || !props.bootcamps.items) {
        console.log('No Treehouse certifications data found');
        return <div>No Treehouse certifications found</div>;
    }
    
    return (
        <>
            {props.bootcamps.items.map((cert, index) => (
                <div key={index} className="col-12 col-md-6 mb-4">
                    <div className="treehouse-cert-card">
                        <div className="treehouse-logo-container">
                            <div className="treehouse-logo">
                                <img 
                                    src={treehouseSeal} 
                                    alt="Treehouse Techdegree Seal" 
                                    className="treehouse-seal-image"
                                />
                            </div>
                        </div>
                        <div className="treehouse-cert-header">
                            {/* Removed Techdegree badge text */}
                        </div>
                        <div className="treehouse-cert-body">
                            <h3 className="treehouse-cert-title">{cert.title}</h3>
                            <div className="treehouse-cert-meta">
                                <span className="treehouse-issuer">Treehouse</span>
                                <span className="treehouse-date">{cert.date}</span>
                            </div>
                            <div className="treehouse-cert-category">{cert.category}</div>
                            <div className="treehouse-cert-details">
                                <div className="treehouse-detail-item">
                                    <strong>Projects Completed:</strong> {cert.totalProjects}
                                </div>
                                <div className="treehouse-detail-item">
                                    <strong>Program Type:</strong> Techdegree
                                </div>
                                <div className="treehouse-detail-item">
                                    <strong>Focus Area:</strong> {cert.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TreehouseCerts; 