import IconItem from "../components/IconItem";

export default function Skills() {
  const skillData = [
    {
      "skill_name": "Python",
      "skill_logo": "./assets/icons/python.svg"
    },
    {
      "skill_name": "C",
      "skill_logo": "./assets/icons/c.svg"
    },
    {
      "skill_name": "C++",
      "skill_logo": "./assets/icons/cplusplus.svg"
    },
    {
      "skill_name": "C#",
      "skill_logo": "./assets/icons/csharp.svg"
    },
    {
      "skill_name": "Dart",
      "skill_logo": "./assets/icons/dart.svg"
    },
    {
      "skill_name": "Flutter",
      "skill_logo": "./assets/icons/flutter.svg"
    },
    {
      "skill_name": "Java",
      "skill_logo": "./assets/icons/java.svg"
    },
    {
      "skill_name": "HTML5",
      "skill_logo": "./assets/icons/html5.svg"
    },
    {
      "skill_name": "CSS3",
      "skill_logo": "./assets/icons/css3.svg"
    },
    {
      "skill_name": "Javascript",
      "skill_logo": "./assets/icons/javascript.svg"
    },
    {
      "skill_name": "Firebase",
      "skill_logo": "./assets/icons/firebase.svg"
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
