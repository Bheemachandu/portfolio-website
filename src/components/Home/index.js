import {Component} from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import Project from '../project'
import './index.css'

const projectsList = [
  {
    id: 0,
    name: 'Jobby App',
    description:
      'Developed a comprehensive job search solution, Jobby App.USER NAME:rahul,PASSWORD:rahul@2021',
    projectLink: 'jobbyapp.ccbp.tech',
  },
  {
    id: 1,
    name: 'Todos Application',
    description:
      'Developed persistent todo application with CRUD operations to track list of tasks',
    projectLink: 'bheematodos.ccbp.tech',
  },
  {
    id: 2,
    name: 'Popular Podcasts (Podcasts Page)',
    description:
      'Built a website showcasing diverse podcasts with speaker details and the number of episodes available.',
    projectLink: 'bheemapodcast.ccbp.tech',
  },
]

class Home extends Component {
  state = {
    renderList: projectsList,
    projectName: '',
    projectLink: '',
    projectDescription: '',
  }

  nameChange = event => {
    this.setState({projectName: event.target.value})
  }

  linkChange = event => {
    this.setState({projectLink: event.target.value})
  }

  descriptionChange = event => {
    this.setState({projectDescription: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      projectName,
      renderList,
      projectLink,
      projectDescription,
    } = this.state
    const projectDetails = {
      id: renderList.length,
      name: projectName,
      projectLink,
      description: projectDescription,
    }
    const newList = [...renderList, projectDetails]
    this.setState({
      renderList: newList,
      projectName: '',
      projectLink: '',
      projectDescription: '',
    })
  }

  render() {
    const {
      renderList,
      projectName,
      projectLink,
      projectDescription,
    } = this.state
    console.log(renderList)
    console.log(projectName)
    return (
      <div className="homeContainer">
        <div className="headerContainer">
          <div>
            <p className="headerPara">Bheemchand Anagani</p>
          </div>
          <div className="menuHeader">
            <p className="headerPara about">
              <a href="#about" className="navigationLink">
                About
              </a>
            </p>
            <p className="headerPara about">
              <a className="navigationLink" href="#projects">
                Projects
              </a>
            </p>
            <p className="headerPara about">
              <a className="navigationLink" href="#contact">
                Contacts
              </a>
            </p>
          </div>
        </div>
        <div id="about" className="container1">
          <div className="container2">
            <h1 className="role">UI/UX Designer</h1>
            <div>
              <h1>Hello, my name is Madelyn Torff</h1>
              <p>
                Short text with details about you, what you do or your
                professional career. You can add more information on the about
                page.
              </p>
              <div className="buttonDiv">
                <button className="projectBtn" type="button">
                  <a className="navigationLink" href="#projects">
                    Projects
                  </a>
                </button>
                <button className="LinkedInBtn" type="button">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="image"
              alt="img"
              src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1704548223/dgimeaaepwjemktfslla.png"
            />
          </div>
        </div>
        <div className="addProjectContainer">
          <h1 className="formHeading">Add Project</h1>
          <form onSubmit={this.submitForm} className="form">
            <div className="inputDiv">
              <label className="label" htmlFor="name">
                Project Name
              </label>
              <input
                value={projectName}
                onChange={this.nameChange}
                className="inputEl"
                id="name"
              />
            </div>
            <div className="inputDiv inputDivPadding">
              <label className="label" htmlFor="name">
                Project Link
              </label>
              <input
                value={projectLink}
                onChange={this.linkChange}
                className="inputEl"
                id="name"
              />
            </div>
            <div className="inputDiv inputDivPadding">
              <label className="label" htmlFor="name">
                Description
              </label>
              <input
                value={projectDescription}
                onChange={this.descriptionChange}
                className="inputEl"
                id="name"
              />
            </div>
            <div className="inputDivPadding addBtnDiv">
              <button type="submit" className="addBtn">
                Add
              </button>
            </div>
          </form>
        </div>
        <img
          alt="img"
          className="bottomBorder"
          src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1704552187/gwofv0hvjwjaphxcq98n.png"
        />
        <div id="projects" className="container4">
          <h1 className="projectHeading">Projects</h1>
          {renderList.map(eachUser => (
            <Project ProjectDetails={eachUser} key={eachUser.id} />
          ))}
          <div id="contact" className="contactContainer">
            <div className="iconContainer">
              <RiInstagramFill className="icon" />
              <FaLinkedin className="icon" />
              <HiMail className="icon" />
            </div>
            <h1 className="iconContent">
              Copyright © 2024. All rights reserved
            </h1>
          </div>
        </div>
        <img
          alt="img"
          className="bottomBorder"
          src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1704552187/gwofv0hvjwjaphxcq98n.png"
        />
      </div>
    )
  }
}

export default Home
