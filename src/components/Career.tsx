import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship (DevOps)</h4>
                <h5>Core Elite Experts (CEE)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Assisted in building and maintaining CI/CD pipelines for automated
              deployments. Worked with Docker and containerized environments,
              supported cloud workflows, and collaborated with engineering teams
              to deliver production-ready systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship (Web Developer)</h4>
                <h5>AlfaOrigins</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on client-facing applications using the MERN stack,
              built RESTful APIs and scalable backend services, delivered
              responsive UIs, and also contributed to backend development
              with Django.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Software Engineering</h4>
                <h5>Air University</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Built a strong foundation in software engineering while focusing
              on scalable backend systems, AI integration, and practical,
              production-focused project delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
