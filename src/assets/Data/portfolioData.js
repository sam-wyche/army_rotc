import infantry from "../Images/infantry.jpeg"
import fa from "../Images/fa.jpeg"
import armor from "../Images/armor.webp"
import aviation from "../Images/aviation.jpeg"
import intel from "../Images/intel.jpeg"
import medserv from "../Images/medserv.avif"
import ord from "../Images/ord.jpeg"
import signal from "../Images/satellite.jpeg"
import engineer from "../Images/engineer.jpeg"
import mp from "../Images/mp.jpeg"
import chem from "../Images/chem.jpeg"
import ada from "../Images/ada.jpeg"
import qm from "../Images/qm.jpeg"
import ag from "../Images/ag.jpeg"
import finance from "../Images/finance.jpeg"
import nurse from "../Images/nurse.jpeg"
import cyber from "../Images/cyber.jpeg"
import transpo from "../Images/transpo.jpeg"

const portfolios = [
  {
    id: "01",
    imgUrl: infantry,
    category: "combat-arms",
    title: "Infantry",
    description:
      "The infantry officer is responsible for leading the infantry and combined armed forces during land combat.",
    strengths: ["Problem Solver", "Physically Fit", "Mentally Tough", "Communicator", "Multi-Tasker", "Inspirational Leader"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/ground-forces/firearms-ammunition/11a-infantry-officer.html",
  },
  {
    id: "02",
    imgUrl: fa,
    category: "combat-arms",
    title: "Field Artillery",
    description:
      "The field artillery officer leads the field artillery branch, who neutralizes the enemy by cannon, rocket and missile fire. The officer must be an expert in tactics, techniques and procedures for the employment of fire support systems.",
    strengths: ["Physically Fit", "Mentally Tough", "Multi-Tasker", "Communicator", "Spatially Intelligent", "Interdisciplinary"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/ground-forces/explosives-artillery/13a-field-artillery-officer.html#:~:text=As%20a%20Field%20Artillery%20Officer,tactics%2C%20techniques%2C%20and%20procedures.",
  },
  {
    id: "03",
    imgUrl: armor,
    category: "combat-arms",
    title: "Armor",
    description:
      "Armor officers are responsible for tank and cavalry/forward reconnaissance operations on the battlefield. The role of an armor officer is to be a leader in operations specific to the armor branch and to lead others in many areas of combat operations.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/ground-forces/tanks-machinery/19a-armor-officer.html",
  },
  {
    id: "04",
    imgUrl: aviation,
    category: "combat-arms",
    title: "Aviation",
    description:
      "Aviation officers coordinate/lead operations using Army helicopters: OH-58 Kiowa, UH-60 Black Hawk, CH-47 Chinook and the AH-64 Apache. These operations can haul troops and carry supplies, as well as provide quick-strike and long-range target engagement.",
    strengths: ["Prudent Risk Taker", "Interpersonal", "Interdisciplinary", "Spatially Intelligent", "Innovative", "Multi-Tasker"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/aviation/managing-piloting-aircraft/15a-aviation-officer.html",
  },
  {
    id: "05",
    imgUrl: intel,
    category: "combat-support",
    title: "Military Intelligence",
    description:
      "The Army’s military intelligence is responsible for all collected intelligence during Army missions. They provide essential information that often save the Soldiers fighting on front lines.",
    strengths: ["Logical/Analytical", "Communicator", "Perceptive", "Mentally Tough", "Problem Solver", "Inspirational Leader"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/languages-code/35a-military-intelligence-officer.html#:~:text=As%20an%20Army%20Military%20Intelligence,Soldiers%20fighting%20on%20front%20lines.",
  },

  {
    id: "06",
    imgUrl: medserv,
    category: "special-branches",
    title: "Medical Service",
    description:
      "Medical service corps officers command the medical service corps that treats and helps the Soldiers and their families in a variety of areas: Behavioral Science, Health Administration, Laboratory Sciences, Optometry, Pharmacy, Podiatry, and Preventative Medicine.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/specialty-careers/health-care.html",
  },
  {
    id: "07",
    imgUrl: ord,
    category: "combat-service-support",
    title: "Ordanance",
    description:
      "Ordnance officers are responsible for ensuring that weapons systems, vehicles and equipment are ready and available — and in perfect working order — at all times. They also manage the developing, testing, fielding, handling, storage and disposal of munitions.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/transportation-inventory/91-ordnance-officer.html#:~:text=As%20an%20Ordnance%20Officer%2C%20you,storage%2C%20and%20disposal%20of%20munitions.",
  },
  {
    id: "08",
    imgUrl: signal,
    category: "combat-support",
    title: "Signal",
    description:
      "The signal officer leads the Signal Corps, which is responsible for the Army’s entire systems of communication. Officers plan and execute all aspects of communication on a mission and are critical to the Army’s continued success.",
    strengths: ["Technologically Adept", "Mentally Tough", "Problem Solver", "Communicator", "Innovative", "Inspirational"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/locations-stats-frequencies/25a-signal-officer.html",
  },
  {
    id: "09",
    imgUrl: engineer,
    category: "combat-arms",
    title: "Engineer",
    description:
      "An engineer officer is responsible for providing full support to the wide range of engineering duties in the Army. They can help build structures, develop civil works programs and even provide combat support.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/mechanics-engineering/design-develop/12a-engineer-officer.html#:~:text=As%20an%20Engineer%20Officer%2C%20you,to%20troops%20in%20the%20field.",
  },
  {
    id: "10",
    imgUrl: mp,
    category: "combat-support",
    title: "Military Police",
    description:
      "A military police officer is responsible for leading the Soldiers that protect lives and property on Army Installations Officers supervise the execution of the five military police Battlefield functions:\n"+
      "1. Maneuver and mobility support operations (reconnaissance and surveillance)\n"+
      "2. Area security operations (site security and response)\n"+
      "3. Law & order operations (law enforcement and developing host-nation police forces)\n"+
      "4. Internment/resettlement operations (military prisoners and enemy combatants)\n"+
      "5. Police intelligence operations",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/safety-order-legal/31a-military-police-officer.html",
  },
  {
    id: "11",
    imgUrl: chem,
    category: "combat-support",
    title: "Chemical",
    description:
      "A Chemical, Biological, Radiological and Nuclear officer commands the Army branch that specifically defends against the threat of CBRN weapons and Weapons of Mass Destruction. These officers lead an extraordinary chemical unit that is completely dedicated to protecting our nation.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/ground-forces/explosives-artillery/74a-cbrn-officer.html",
  },
  {
    id: "12",
    imgUrl: ada,
    category: "combat-arms",
    title: "Air Defense Artillery",
    description:
      "The air defense artillery officer leads the air defense artillery branch, who protects U.S. forces from aerial attack, missile attack and enemy surveillance. They must be an expert in tactics, techniques and procedures for the employment of air defense systems. They also become an expert in one or more of the following systems: the PATRIOT missile system and the AVENGER system.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/aviation/detecting-aerial-threats/14a-air-defense-artillery-officer.html",
  },
  {
    id: "13",
    imgUrl: qm,
    category: "combat-service-support",
    title: "Quartermaster",
    description:
      "Quartermaster officers are responsible for making sure equipment, materials and systems are available and functioning for missions. More specifically, the quartermaster officer provides supply support for Soldiers and units in field services, aerial delivery, and material and distribution management.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/mechanics-engineering/test-repair/91j-quartermaster-chemical-equipment-repairer.html",
  },
  {
    id: "14",
    imgUrl: ag,
    category: "combat-service-support",
    title: "Adjutant General",
    description:
      "An adjutant general officer is responsible for providing personnel support that affects Soldiers’ overall welfare and well-being, while assisting commanders by accounting for and keeping Soldiers combat-ready.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/admin-financial-support/42b-human-resources-officer.html#:~:text=Job%20Overview&text=As%20a%20Human%20Resources%20Officer,services%20which%20impact%20Soldier%20careers.",
  },
  {
    id: "15",
    imgUrl: finance,
    category: "combat-service-support",
    title: "Finance",
    description:
      "The financial manager is in charge of the Army’s Finance Corps, who are responsible for sustaining missions through purchases of services and supplies.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/admin-financial-support/36a-financial-manager.html",
  },
  {
    id: "16",
    imgUrl: nurse,
    category: "special-branches",
    title: "Army Nurse",
    description:
      "Nurse Corps officers lead a nursing team that cares for Soldiers and their families. As part of the Army Nurse Corps, they play an important role in improving the overall quality of life for Soldiers and their families.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/science-medicine/research/66b-public-health-nurse.html",
  },
  {
    id: "17",
    imgUrl: cyber,
    category: "combat-support",
    title: "Cyber",
    description:
      "Cyber branch is a maneuver branch with the mission to conduct defensive and offensive cyberspace operations (DCO and OCO). Cyber is the only branch designed to directly engage threats within the cyberspace domain.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/locations-stats-frequencies/17a-cyber-warfare-officer.html",
  },
  {
    id: "18",
    imgUrl: transpo,
    category: "combat-service-support",
    title: "Transportation",
    description:
      "The Transportation Corps is responsible for moving supplies, troops and equipment anywhere on the globe. During war, the Transportation Corps utilizes trucks, boats and airplanes to provide extremely fast support to the combat teams on the frontlines. Transportation officers are experts in the systems, vehicles and procedures of moving troops and supplies in the Army.",
    strengths: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/transportation-inventory/88a-transportation-officer.html",
  }
];

export default portfolios;