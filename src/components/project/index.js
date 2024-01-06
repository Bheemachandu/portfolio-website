import './index.css'

const Project = props => {
  const {ProjectDetails} = props
  const {id, name, projectLink, description} = ProjectDetails
  console.log(id)
  console.log('bheem')
  console.log(projectLink)
  const classname = id % 2 !== 0 ? 'orderChange' : 'project3'
  const projectImage =
    id % 2 === 0
      ? 'https://res.cloudinary.com/duwmzyo4e/image/upload/v1704562353/ypqtcwolydy3aepw1f9r.png'
      : 'https://res.cloudinary.com/duwmzyo4e/image/upload/v1704562400/epp0scxwel2qqnahasom.png'
  return (
    <div className="projectContainer">
      <div className="project2">
        <div className="project21">
          <h1 className="projectName">{name}</h1>
          <p className="projectDescription">{description}</p>

          <a
            className="navigationLink"
            aria-label="View Project"
            href={`https://${projectLink}`}
            rel="noreferrer"
            target="_blank"
          >
            <button className="projectButton" type="button">
              View Project
            </button>
          </a>
        </div>
      </div>
      <div className={classname}>
        <img alt="img" className="projectImg" src={projectImage} />
      </div>
    </div>
  )
}

export default Project
