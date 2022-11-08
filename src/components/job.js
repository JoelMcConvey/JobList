import React from 'react'

const Job = ({ Company, Location, DatePosted, Title, Link }) => {
    return (
        <div className="job-row">
            <a href={Link} target="_blank" rel="noreferrer">
                <div className="job-inner">
                    <div className="company-logo">
                        <img src={require(`../assets/${Company}.svg`)} alt={`${Company} Logo`} />
                    </div>
                    <div className="job-description">
                        <h3 className="company-name">{Company}</h3>
                        <h5 className="position">{Title}</h5>
                    </div>
                    <div className="job-misc">
                        <span className="date">{DatePosted}</span>
                        <span className="location">{Location}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Job;