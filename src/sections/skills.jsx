import IconItem from "../components/IconItem";

export default function Skills() {
  const skillData = [
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
    {
      "skill_name": "Python",
      "skill_logo": "./images/logo.png"
    },
  ];
  return (
    <div className="portfolio-section">
      <h2>Skills</h2>
      <div className="container">
            <div className="flex">
                    {
                      skillData.map((skillItem)=>{
                        return <IconItem logoName={skillItem.skill_name} logoLocation={skillItem.skill_logo} />
                      })
                    }
                    
            </div>
      </div>
    </div>
  );
}
