export default function Resume() {
  const resume = [
    {
      resumelink: 'https://drive.google.com/file/d/1dT8khtaXvaJi7w5Sg-hDXCuzRhFNnTHg/view?usp=sharing',


    }


  ]
  return (
    <div className="container mb-5">
      <h1 className="mt-4">Resume</h1>
      {resume.map(resumeinfo => (
        <div className="card col-sm-12 col-md-6 mb-3" key='1'>
          <a className="text-dark-emphasis" href={resumeinfo.resumelink} target="_blank" rel="noreferrer">Download My Resume!</a>
          <div className="container resume-info">
            <h3>Front-end Proficiencis</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>responsive design</p>
            <p>React</p>
            <p>Bootstrap</p>

            <h3>Back-end Proficiencis</h3>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Sequlize</p>
            <p>MongoBD, Mongoose</p>
            <p>Rest</p>
            <p>GraphQL</p>
          </div>
        </div>

      ))}
    </div>
  );
}
