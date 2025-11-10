import React, { useState } from "react";
import "./App.css";

const performanceStandards = [
  {
    id: "ps1",
    title:
      "<strong>PS1. Safety.</strong> Youth physical and emotional well-being are prioritized while receiving residential services.",
    expectations: [
      "Trends, or recent events does not threaten the health, safety, or welfare of the youth to self or to others.",
      "Ratio meets requirements and/or the acuity of the milieu, adherence to individual youth supervision plans; and utilization of cameras to promote trauma informed, safe practices.",
      "Staff are responsive to safety threats, and proactive in identifying and responding to potential crisis.",
      "Milieu presents with safeguards and mechanisms in place to prevent youth from harming each other, physically or emotionally to support youth sense of security.",
      "Safety concerns related to the physical plant are immediately addressed and/or a plan of action is executed to prevent youth from residing in unsafe conditions.",
      "Safety concerns related to youth physical health are immediately addressed.",
      "Management model is implemented with fidelity to the model and in compliance with policy/procedures. Practices that are high risk to do harm are reduced, such as the use of restraints and seclusion, utilizing safe alternative interventions.",
      "Staff/youth engagement is trauma informed, and considers the youth's racial, cultural, religious, and linguistic needs."
    ],
    references: [
      "Procedures <a href='https://ilga.gov/commission/jcar/admincode/089/089003010A01000R.html' target='_blank'>301.100</a> Therapeutic Residential Programs Significant Event Reporting and Law Enforcement Involvement",
      "Procedures <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900329&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>329</a> Locating and Returning Missing, Runaway and Abducted Children",
      "Procedures <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900331&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>331</a> Significant Event Reports",
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900384&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>384</a> Behavior Treatment in Residential Child Care Facilities",
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900403&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>403</a> Licensing Standards for Group Homes",
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900404&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>404</a> Licensing Standards for Child Care Institutions and Maternity Centers"
    ],
    items: [
      {
        category: "Physical Safety",
        description:
          "Buildings are safe, clean, well-ventilated, properly light, and heated/cooled"
      },
      {
        category: "Physical Safety",
        description:
          "Youth immediate physical health needs are addressed in a timely manner."
      },
      {
        category: "Physical Safety",
        description:
          "SERs and hotline reports suggests that safeguards are in place to prevent incidents of serious physical injury, elopements, and sexual abuse."
      },
      {
        category: "Milieu Safety",
        description: "Maltreatment occurrence is trending positively."
      },
      {
        category: "Milieu Safety",
        description:
          "The narrative of SERs in the last 30 days suggests that staff used de-escalation techniques appropriately."
      },
      {
        category: "Milieu Safety",
        description:
          "Restraints documented in SERs in the last 30 days suggest that staff used the prescribed behavior management techniques according to the model."
      },
      {
        category: "Milieu Safety",
        description:
          "Youth trauma experience/history is considered when de-escalation techniques are required."
      },
      {
        category: "Milieu Safety",
        description:
          "Youth behavior is managed in accordance with <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900384&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>Rule 384</a>."
      },
      {
        category: "Sense of Security",
        description:
          "Youth behavior and feedback suggest that they feel safe in public and private spaces."
      },
      {
        category: "Sense of Security",
        description:
          "Youth behavior and feedback suggest that they feel safe with the staff."
      },
      {
        category: "Sense of Security",
        description:
          "Youth behavior and feedback suggest that they feel safe with the other youth."
      }
    ]
  },
  {
    id: "ps2",
    title:
      "<strong>PS2. Living Environment.</strong> A safe living environment is provided with adequate and appropriate food, clothing, and shelter.",
    expectations: [
      "Meals are prepared under sanitary conditions and youth are served three balanced meals a day (exceptions include when lunch is served at school).",
      "Youth have properly fitted and clean clothing that is appropriate for the seasons; and essentials for maintaining personal care and hygiene are provided; youth clothing is not used for discipline.",
      "Facility is clean, hygienic, in good structural repair and free of hazards where the living space is inviting and homelike; sleeping rooms are properly furnished.",
      "The facility has a maintenance program that adequately handles repair, upkeep and replacement of damaged essential items or damage to building."
    ],
    references: [
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900384&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>384</a> Behavior Treatment in Residential Child Care Facilities",
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900403&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>403</a> Licensing Standards for Group Homes",
      "Rule <a href='https://ilga.gov/commission/jcar/admincode/089/089004030000140R.html' target='_blank'>403.14</a> for group homes",
      "Rule <a href='https://ilga.gov/agencies/JCAR/Sections?PartID=08900404&TitleDescription=TITLE%2089:%20%20SOCIAL%20SERVICES' target='_blank'>404</a> Licensing Standards for Child Care Institutions and Maternity Centers",
      "Rule <a href='https://ilga.gov/commission/jcar/admincode/089/089004040000380R.html' target='_blank'>404.38</a> for childcare institutions",
      "Program Plan <a href='https://www2.illinois.gov/dcfs/lookingtofoster/Documents/CFS%20968.pdf' target='_blank'>CFS-968</a> Section 5.0 Service Parameters"
    ],
    items: [
      {
        category: "Food",
        description:
          "Meals and snacks are available at the appropriate times, include a healthy mix of fruits, vegetables, grains, protein, and dairy products, and include alternatives for dietary restrictions or other special circumstances."
      },
      { category: "Food", description: "Meals are served under clean and sanitary conditions." },
      { category: "Food", description: "Menus are followed and posted where youth can view them." },
      {
        category: "Clothing",
        description:
          "Youth have clean clothes that fit properly and are appropriate for the current season."
      },
      {
        category: "Clothing",
        description:
          "Youth have their own clothes, not uniforms, reflecting level systems."
      },
      {
        category: "Clothing",
        description:
          "Youth have clothes comparable to what other youth of similar age might wear."
      },
      {
        category: "Shelter",
        description:
          "Common areas are in good repair, have enough furniture in good repair, and include other items appropriate for the space's function."
      }
    ]
  },
  {
    id: "ps3",
    title:
      "<strong>PS3. Youth Experience.</strong> Youth experience is assessed as positive by ensuring youth safety, skill building, staff engagement and youth voice.",
    expectations: [
      "Youth and family are treated with respect by all levels of staff where their right to personal privacy and confidentiality is valued.",
      "Youth are informed of their rights and grievance procedures; and their voice is incorporated in the treatment planning and overall treatment experience.",
      "Youth receive clear expectations and information about unit rules.",
      "Communication with youth and families fosters youth voice and commitment to working through challenges.",
      "Programming, services, and individualized treatment planning are sensitive to youth's racial, cultural, religious and linguistic needs.",
      "Youth express positive experiences of safety, skill building, and therapeutic interactions with staff."
    ],
    references: [
      "Rule 384 Behavior Treatment in Residential Child Care Facilities",
      "Administrative Procedures #30 Youth Voice",
      "Procedures 301 Placement and Visitation Services",
      "Procedures 301.100 Therapeutic Residential Programs",
      "Procedures 315.112 Child and Family Team Meetings – Therapeutic Residential Programs",
      "Program Plan CFS-968 Sections 5.2.8, 5.2.7"
    ],
    items: [
      {
        category: "Skill Building",
        description:
          "Youth behavior and feedback suggest that they are learning new coping and relationship skills."
      },
      {
        category: "Skill Building",
        description:
          "Youth behavior and feedback suggest that they are engaging in age and developmentally appropriate therapeutic recreational activities."
      },
      {
        category: "Skill Building",
        description:
          "Youth behavior and feedback suggest that they enjoy the therapeutic recreational activities."
      },
      {
        category: "Staff Engagement",
        description:
          "Youth behavior and feedback suggest that they are treated with respect."
      },
      {
        category: "Staff Engagement",
        description:
          "Youth behavior and feedback suggest that staff are supportive and can help them achieve their goals."
      },
      {
        category: "Staff Engagement",
        description:
          "Youth behavior and feedback suggest that there are appropriate boundaries between the youth and staff."
      },
      {
        category: "Youth Voice",
        description:
          "Youth voice is included in educational, treatment, transition, and discharge planning decisions."
      },
      {
        category: "Youth Voice",
        description:
          "Youth voice is included in decisions about day-to-day activities."
      },
      {
        category: "Youth Voice",
        description:
          "Youth grievances are addressed, including about allowances and clothing vouchers."
      }
    ]
  },
  {
    id: "ps4",
    title:
      "<strong>PS4. Youth and Family Driven Care.</strong> Youth and family driven approaches are utilized where youth are empowered, and family is central.",
    expectations: [
      "Youth and family are treated with respect by all levels of staff where their right to personal privacy and confidentiality is valued.",
      "Youth/family are informed of their rights and grievance procedures; youth/family centered approach to the assessment and treatment planning.",
      "Communication with youth and families fosters youth voice and commitment to working through challenges.",
      "Programming, services, and individualized treatment planning are sensitive to youth's racial, cultural, religious, and linguistic needs.",
      "Utilization of the Child and Family Team meetings to activate and maintain family participation.",
      "Youth/family connections are valued and incorporated in orientation, programming, therapeutic services, and visitation."
    ],
    references: [
      "Administrative Procedures #30 Youth Voice",
      "Procedures 301.100 Therapeutic Residential Programs",
      "Procedures 331 Significant Event Reporting",
      "Rule 384; Rule 403; Rule 404; Rule 431",
      "Program Plan CFS-968 Sections 1.4, 5.0"
    ],
    items: [
      {
        category: "Youth Guided",
        description:
          "Youth are involved in decisions about their treatment and permanency plan goals."
      },
      {
        category: "Youth Guided",
        description:
          "Youth culture, gender identity, language, race/ethnicity, and sexual orientation are respected."
      },
      {
        category: "Family Driven",
        description:
          "Youth family connections are considered in their treatment and permanency planning."
      },
      {
        category: "Family Driven",
        description:
          "There is shared responsibility for the CFTM addressing treatment and permanency goals."
      },
      {
        category: "Family Driven",
        description:
          "Sibling and family visits are facilitated per the visitation and contract plans."
      },
      {
        category: "Family Driven",
        description:
          "Activities include agency hosted family focused events/activities."
      },
      {
        category: "Family Driven",
        description:
          "Caregivers and families are provided with training and coaching to support reunification and the youth after discharge."
      },
      {
        category: "Family Driven",
        description:
          "Caregivers and family culture, gender identity, language, race/ethnicity, and sexual orientation are respected."
      }
    ]
  },
  {
    id: "ps5",
    title:
      "<strong>PS5. Staff Training and Education.</strong> Staff are equipped with training, education, and supervision to provide quality services and supports to youth and families.",
    expectations: [
      "The contract utilizes a training program that includes pre-service training focusing on trauma.",
      "Training and consultation are provided by individuals within the agency or consultants who have expertise in trauma.",
      "There are staff trained and/or certified to provide specialized services as identified in their contract.",
      "There is a mechanism/process for the contract to maintain staff compliance with trainings and certification requirements."
    ],
    references: [
      "Procedures 301.100 Therapeutic Residential Programs",
      "Procedures 302 Appendix K & M",
      "Procedures 331 Significant Event Reporting",
      "Rule 384; Rule 403; Rule 404; Rule 431",
      "Program Plan CFS-968 Sections 4.0, 5.0, 5.2.7.7"
    ],
    items: [
      {
        description:
          "The training curriculum addresses trauma and the effects of trauma on child development per the trauma treatment model and behavior management program."
      },
      {
        description:
          "Staff at all levels of the organization are provided with ongoing education and training in the trauma treatment model and behavior management program."
      },
      {
        description:
          "Staff are trained on youth-guided practices, including cultural competence and humility training."
      },
      {
        description:
          "Training records identify staff who have been trained, need to be trained, or require remedial training."
      },
      { description: "Weekly multidisciplinary treatment team meetings are convened." },
      {
        description:
          "Staff regularly meet with their supervisors for individual/group supervision."
      },
      {
        description:
          "Staff regularly debrief with their supervisor about their stress reactions and how stress impacts their work."
      }
    ]
  },
  {
    id: "ps6",
    title:
      "<strong>PS6. Milieu Operations and Programming.</strong> There is a therapeutic environment that ensures safety, operational efficiency, and effective programming.",
    expectations: [
      "There is ongoing and effective collaboration and communication between professional and direct care staff.",
      "Staff members are actively and therapeutically engaged with youth.",
      "A skilled staff member is designated as the lead for each shift.",
      "Minimum required staff/youth ratios maintained.",
      "Discipline is provided in accordance with Rule 384.",
      "Milieu operations are structured, consistent and predictable.",
      "The program utilizes the Reasonable and Prudent Parental Standard.",
      "Plans are in place to address the potential for unexpected circumstances.",
      "Elements/principles of trauma informed practice are evident in milieu operations.",
      "The program schedule provides programming to engage youth and support treatment progress."
    ],
    references: [
      "Procedures 301.100; Procedures 302 Appendix K; Procedures 315.135; Procedures 331",
      "Rule 384; Rule 403; Rule 404; Rule 431",
      "Program Plan CFS-968 Sections 4.0, 4.2, 5.0, 5.2.8, 5.2.7.7"
    ],
    items: [
      {
        category: "Operations",
        description:
          "Rules and expectations are regularly reviewed and positively reinforced."
      },
      {
        category: "Operations",
        description:
          "Regular meetings are scheduled to discuss youth behavior with multidisciplinary staff."
      },
      {
        category: "Operations",
        description:
          "The minimum required staff-to-youth ratio is maintained, with capacity to adjust for acuity."
      },
      {
        category: "Programming",
        description:
          "The milieu is structured, consistent, and predictable."
      },
      {
        category: "Programming",
        description:
          "The milieu incorporates trauma-informed practice into milieu operations."
      },
      {
        category: "Programming",
        description:
          "There is structured programming weekdays, weekends, and days when school is not in session."
      },
      {
        category: "Programming",
        description:
          "The milieu provides goal-oriented, skill-building community groups and therapeutic recreation."
      },
      {
        category: "Programming",
        description:
          "The milieu integrates sensory integration/modulation activities and expressive therapies."
      },
      {
        category: "Programming",
        description:
          "The milieu demonstrates awareness of and respect for race/ethnicity, culture, sexual orientation, and gender identity."
      }
    ]
  },
  {
    id: "ps7",
    title:
      "<strong>PS7. Clinical Programs.</strong> Prescribed clinical services are provided by staff that holds the relevant degrees, licensures, and certifications.",
    expectations: [
      "An adequate array of clinical services is provided including individual, group and family counseling or therapy.",
      "Psychiatric services are consistently provided and compliant with DCFS rules.",
      "Sensory integration/modulation activities and expressive therapies are incorporated into treatment modalities.",
      "Treatment plans are individualized, problem-oriented, and consider the youth's strengths and goals."
    ],
    references: [
      "Procedures 301.100 Therapeutic Residential Programs",
      "Rule 325 Psychotropic Medications",
      "Rule 384; Rule 403; Rule 404",
      "Program Plan CFS-968 Sections 1.4, 4.0, 5.0"
    ],
    items: [
      {
        category: "Elements",
        description:
          "Youth receive the individual, group, and family therapy outlined in their treatment plans."
      },
      {
        category: "Elements",
        description:
          "Alternatives to talk therapy are available when outlined in treatment plans."
      },
      {
        category: "Elements",
        description:
          "Youth receive psychiatry services outlined in treatment plans."
      },
      {
        category: "Credentials",
        description:
          "Therapy is provided or supervised by trained and/or credentialed therapists."
      },
      {
        category: "Credentials",
        description:
          "Alternatives to talk therapy are provided or supervised by experienced therapists."
      },
      {
        category: "Credentials",
        description:
          "Psychotropic medications are prescribed and monitored by appropriately licensed staff."
      }
    ]
  },
  {
    id: "ps8",
    title:
      "<strong>PS8. Management.</strong> There is leadership and management practices that demonstrates effective communication, governance, and operational management.",
    expectations: [
      "Adequate mechanisms exist to facilitate good communication, cooperation and consistency among staff members.",
      "Leadership has the capacity to recruit and retain qualified professional and direct care staff.",
      "Leadership solicits and considers input from youth and staff.",
      "The program is managed by a stable leadership team.",
      "High risk situations or potential for high-risk situations are reported and there is transparency.",
      "Responses to monitoring concerns are timely and adequate.",
      "There is a clearly defined leadership hierarchy with well-defined roles.",
      "Executive management supports and guides residential leaders.",
      "There is strong clinical leadership that is integrated into all aspects of the program.",
      "Administrative systems are dependable and consistent."
    ],
    references: [
      "Rule 384; Rule 403; Rule 404",
      "Program Plan CFS-968 Sections 3.0, 8.0, 9.0"
    ],
    items: [
      "Communication: Adequate mechanisms are in place to facilitate effective communication, cooperation, and consistency among staff.",
      "Communication: Input from youth, their families, and child and family teams is solicited and considered.",
      "Communication: High-risk or potentially high-risk situations are routinely and transparently reported to the Department.",
      "Leadership: There are clearly defined leadership hierarchy and roles.",
      "Leadership: Executive management supports and guides its residential and clinical leaders.",
      "Leadership: Clinical leadership is integrated into all aspects of the program.",
      "Management: Qualified staff are retained.",
      "Management: Agency behavior treatment plans and policies are regularly reviewed.",
      "Management: Internal governance includes involvement from the board of directors or other advisory group."
    ]
  },
  {
    id: "ps9",
    title:
      "<strong>PS9. Quality Improvement Processes.</strong> A QI process that includes administrative systems and fosters a culture of improvement has been implemented and maintained.",
    expectations: [
      "Program has an environment/culture that supports continuous quality improvement.",
      "QI plan addresses Performance Standards as outlined by the Provider and the Department.",
      "Data collected for the QI plan are shared with direct care and residential program leadership.",
      "Staff demonstrate awareness of the Performance Standards.",
      "There are improvement activities for Performance Standards.",
      "The Quality Improvement Plan is implemented, reviewed and modified as needed.",
      "Post discharge treatment outcomes for youth are monitored and included."
    ],
    references: [
      "Procedures 301.100; Procedures 331",
      "Rule 384; Rule 403; Rule 404",
      "Program Plan CFS-968 Sections 2.0, 3.0, 8.0, 9.0"
    ],
    items: [
      {
        category: "Administrative systems",
        description: "There is compliance with mandated reporting responsibilities."
      },
      {
        category: "Administrative systems",
        description:
          "SERs are comprehensive, accurately completed, and submitted promptly."
      },
      {
        category: "Administrative systems",
        description:
          "Relevant procedures and policies are implemented with sustained progress."
      },
      {
        category: "Culture of improvement",
        description:
          "The QI plan addresses previously identified key performance areas."
      },
      {
        category: "Culture of improvement",
        description:
          "QI activities are implemented with sustained progress."
      },
      {
        category: "Culture of improvement",
        description:
          "The QI plan evaluates the implementation and effectiveness of post-discharge services."
      }
    ]
  }
];

const stripTags = (html) => html.replace(/<[^>]*>/g, "");

function App() {
  const [formData, setFormData] = useState({});
  const [scoreErrors, setScoreErrors] = useState({});
  const [dateError, setDateError] = useState("");

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "submitted_date" ||
      name === "approved_date" ||
      name === "rebuttal_date"
    ) {
      handleDateChange(name, value);
    } else {
      updateField(name, value);
    }
  };

  const handleDateChange = (name, value) => {
    const next = { ...formData, [name]: value };
    const submitted = next.submitted_date
      ? new Date(next.submitted_date)
      : null;
    const approved = next.approved_date ? new Date(next.approved_date) : null;
    const rebuttal = next.rebuttal_date ? new Date(next.rebuttal_date) : null;

    let err = "";

    if (submitted && approved && submitted > approved) {
      err = "Submitted Date must be before or equal to Approved Date.";
      next.approved_date = "";
    }

    if (rebuttal && submitted && rebuttal < submitted) {
      err = "Rebuttal Date must be after or equal to Submitted Date.";
      next.rebuttal_date = "";
    }

    if (name === "approved_date" && approved && !isNaN(approved)) {
      const exp = new Date(approved);
      exp.setDate(exp.getDate() + 2);
      next.rebuttal_expiration_date = exp.toISOString().split("T")[0];
    }

    setDateError(err);
    setFormData(next);
  };

  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    const numeric = value === "" ? "" : Number(value);
    let error = "";

    if (numeric === "" || Number.isNaN(numeric) || numeric < 1 || numeric > 4) {
      error = "Score must be between 1 and 4";
    }

    setScoreErrors((prev) => ({ ...prev, [name]: error }));
    updateField(name, value);
  };

  const getSummaryScore = (psId) => {
    let total = 0;
    let count = 0;
    Object.entries(formData).forEach(([key, val]) => {
      if (key.startsWith(`${psId}_item`) && val !== "") {
        const num = Number(val);
        if (!Number.isNaN(num) && num >= 1 && num <= 4) {
          total += num;
          count++;
        }
      }
    });
    if (!count) return "";
    return Math.round(total / count);
  };

  const shouldShowNextStep = (psId, itemName) => {
    const val = formData[itemName];
    if (!val) return false;
    const score = Number(val);
    if (Number.isNaN(score)) return false;
    return (psId === "ps6" || psId === "ps8") && score <= 3;
  };

  const getCharCount = (name) => (formData[name] || "").length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasScoreError = Object.values(scoreErrors).some(Boolean);
    if (hasScoreError) {
      alert("Please fix score errors before submitting.");
      return;
    }
    if (dateError) {
      alert("Please fix date errors before submitting.");
      return;
    }
    console.log("Assessment Data:", formData);
    alert("Assessment submitted successfully! Check console for full data.");
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="dcfs-logo">
            <div>Illinois Department of</div>
            <div>DCFS</div>
            <div>Children &amp; Family Services</div>
          </div>
          <div className="header-titles">
            <h1>Residential Contract</h1>
            <h2>Performance Monitoring</h2>
          </div>
        </div>
        <div className="header-right">
          <h1>Performance Standard Report</h1>
        </div>
      </div>

      <form id="assessmentForm" onSubmit={handleSubmit}>
        {/* Info Section */}
        <div className="info-section">
          <div className="info-row">
            <label className="info-label">Date:</label>
            <input
              type="date"
              name="date"
              className="info-input"
              value={formData.date || ""}
              onChange={handleInputChange}
              required
            />

            <label className="info-label">Contract#:</label>
            <input
              type="text"
              name="contract_number"
              className="info-input"
              value={formData.contract_number || ""}
              onChange={handleInputChange}
              required
            />

            <label className="info-label">Provider:</label>
            <input
              type="text"
              name="provider"
              className="info-input"
              style={{ gridColumn: "span 3" }}
              value={formData.provider || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="info-row">
            <label className="info-label">Region:</label>
            <input
              type="text"
              name="region"
              className="info-input"
              style={{ width: "60px" }}
              value={formData.region || ""}
              onChange={handleInputChange}
            />

            <label className="info-label">Address:</label>
            <input
              type="text"
              name="address"
              className="info-input"
              style={{ gridColumn: "span 5" }}
              value={formData.address || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="info-row">
            <label className="info-label">Capacity:</label>
            <input
              type="number"
              name="capacity"
              className="info-input"
              style={{ width: "80px" }}
              value={formData.capacity || ""}
              onChange={handleInputChange}
            />
            <label className="info-label">Census:</label>
            <input
              type="number"
              name="census"
              className="info-input"
              style={{ width: "80px" }}
              value={formData.census || ""}
              onChange={handleInputChange}
            />
            <label className="info-label">Rebuttal Expiration Date:</label>
            <input
              type="date"
              name="rebuttal_expiration_date"
              className="info-input"
              readOnly
              style={{ backgroundColor: "#f0f0f0" }}
              value={formData.rebuttal_expiration_date || ""}
            />
            <label className="info-label">Unit(s):</label>
            <input
              type="text"
              name="units"
              className="info-input"
              value={formData.units || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="info-row">
            <label className="info-label">Monitor:</label>
            <input
              type="text"
              name="monitor"
              className="info-input"
              value={formData.monitor || ""}
              onChange={handleInputChange}
            />
            <label className="info-label">Submitted Date:</label>
            <input
              type="date"
              name="submitted_date"
              className="info-input"
              value={formData.submitted_date || ""}
              onChange={handleInputChange}
            />
            <label className="info-label">Monitoring Supervisor:</label>
            <input
              type="text"
              name="monitoring_supervisor"
              className="info-input"
              value={formData.monitoring_supervisor || ""}
              onChange={handleInputChange}
            />
            <label className="info-label">Approved Date:</label>
            <input
              type="date"
              name="approved_date"
              className="info-input"
              value={formData.approved_date || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="info-row">
            <label className="info-label"></label>
            <div></div>
            <label className="info-label"></label>
            <div></div>
            <label className="info-label"></label>
            <div></div>
            <label className="info-label">Rebuttal Date:</label>
            <input
              type="date"
              name="rebuttal_date"
              className="info-input"
              value={formData.rebuttal_date || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="info-row">
            <label className="info-label">Monitoring Level:</label>
            <select
              name="monitoring_level"
              className="info-input"
              value={formData.monitoring_level || ""}
              onChange={handleInputChange}
            >
              <option value="">Select Level</option>
              <option value="Green">Green Level</option>
              <option value="Yellow">Yellow Level</option>
              <option value="Red">Red Level</option>
            </select>

            <label className="info-label">Monitoring Level Status:</label>
            <input
              type="text"
              name="monitoring_level_status"
              className="info-input"
              style={{ gridColumn: "span 3" }}
              value={formData.monitoring_level_status || ""}
              onChange={handleInputChange}
            />

            <label className="info-label">Score:</label>
            <input
              type="number"
              name="overall_score"
              className="info-input"
              style={{ width: "60px" }}
              min="1"
              max="5"
              value={formData.overall_score || ""}
              onChange={handleInputChange}
            />
          </div>

          {dateError && (
            <div style={{ color: "#e74c3c", marginTop: "5px" }}>{dateError}</div>
          )}
        </div>

        {/* Comment */}
        <div className="comment-section">
          <label>Comment:</label>
          <textarea
            name="header_comment"
            maxLength={4000}
            value={formData.header_comment || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* Summary */}
        <h3 className="summary-title">Performance Standard Summary</h3>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Performance Standard</th>
              <th>Intervention</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {performanceStandards.map((ps) => (
              <tr key={ps.id}>
                <td>{stripTags(ps.title)}</td>
                <td>
                  <input
                    type="text"
                    name={`${ps.id}_intervention`}
                    className="summary-input"
                    value={formData[`${ps.id}_intervention`] || ""}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    readOnly
                    className="summary-score"
                    value={getSummaryScore(ps.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Scoring Scale */}
        <div className="scoring-scale">
          <strong>Scoring Scale:</strong> Each Assessment Item requires a numeric
          score using a 4-point Likert scale:
          <ul>
            <li>
              <strong>1</strong> = Does Not Meet Standard
            </li>
            <li>
              <strong>2</strong> = Partially Meets Standard
            </li>
            <li>
              <strong>3</strong> = Meets Standard
            </li>
            <li>
              <strong>4</strong> = Exceeds Standard
            </li>
          </ul>
        </div>

        <div className="assessment-details-header">Assessment Details</div>

        {/* Performance Standards Sections */}
        <div id="performanceStandards">
          {performanceStandards.map((ps) => (
            <div key={ps.id} className="ps-section">
              <div
                className="ps-header"
                dangerouslySetInnerHTML={{ __html: ps.title }}
              />

              <div className="expectations-box">
                <h4>Expectations:</h4>
                <ol>
                  {ps.expectations.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ol>
              </div>

              <div className="references-box">
                <strong>Relevant Rules and/or Procedures:</strong>
                <ul>
                  {ps.references.map((ref, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: ref }} />
                  ))}
                </ul>
              </div>

              {ps.items.map((item, index) => {
                const itemNum = index + 1;
                const scoreName = `${ps.id}_item${itemNum}_score`;
                const commentName = `${ps.id}_item${itemNum}_comment`;
                const rebuttalName = `${ps.id}_item${itemNum}_rebuttal`;

                const text =
                  typeof item === "string"
                    ? item
                    : item.category
                    ? `<strong>${item.category}:</strong> ${item.description}`
                    : item.description;

                return (
                  <div className="assessment-item" key={itemNum}>
                    <div
                      className="item-number"
                      dangerouslySetInnerHTML={{
                        __html: `<strong>${itemNum}.</strong> ${text}`
                      }}
                    />
                    <div className="score-row">
                      <label className="required">
                        Assessment Item Score (1-4):
                      </label>
                      <input
                        type="number"
                        name={scoreName}
                        className={`${ps.id}-score score-input`}
                        min="1"
                        max="4"
                        value={formData[scoreName] || ""}
                        onChange={handleScoreChange}
                        required
                      />
                      {scoreErrors[scoreName] && (
                        <span className="validation-error">
                          {scoreErrors[scoreName]}
                        </span>
                      )}
                    </div>

                    <div
                      className={
                        "next-step-alert" +
                        (shouldShowNextStep(ps.id, scoreName) ? " show" : "")
                      }
                    >
                      Request Quality Improvement Plan (QIP)
                    </div>

                    <div className="text-field">
                      <label>Comment:</label>
                      <textarea
                        name={commentName}
                        maxLength={4000}
                        value={formData[commentName] || ""}
                        onChange={handleInputChange}
                      />
                      <div className="char-counter">
                        <span className="count">
                          {getCharCount(commentName)}
                        </span>
                        /4000
                      </div>
                    </div>

                    <div className="text-field">
                      <label>Rebuttal:</label>
                      <textarea
                        name={rebuttalName}
                        maxLength={4000}
                        value={formData[rebuttalName] || ""}
                        onChange={handleInputChange}
                      />
                      <div className="char-counter">
                        <span className="count">
                          {getCharCount(rebuttalName)}
                        </span>
                        /4000
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Overall Performance Standard Comment (no rebuttal here) */}
              <div className="overall-comment-section">
                <h3>Overall Performance Standard Comment</h3>

                <div className="text-field">
                  <label className="required">Situation:</label>
                  <div className="instruction">
                    *Briefly describe the current situation or issue that needs
                    to be addressed
                  </div>
                  <textarea
                    name={`${ps.id}_situation`}
                    maxLength={4000}
                    required
                    value={formData[`${ps.id}_situation`] || ""}
                    onChange={handleInputChange}
                  />
                  <div className="char-counter">
                    <span className="count">
                      {getCharCount(`${ps.id}_situation`)}
                    </span>
                    /4000
                  </div>
                </div>

                <div className="text-field">
                  <label className="required">Background:</label>
                  <div className="instruction">
                    *Clearly provide relevant background information that
                    provides context
                  </div>
                  <textarea
                    name={`${ps.id}_background`}
                    maxLength={4000}
                    required
                    value={formData[`${ps.id}_background`] || ""}
                    onChange={handleInputChange}
                  />
                  <div className="char-counter">
                    <span className="count">
                      {getCharCount(`${ps.id}_background`)}
                    </span>
                    /4000
                  </div>
                </div>

                <div className="text-field">
                  <label className="required">Assessment:</label>
                  <div className="instruction">
                    *State one's professional analysis and/or interpretation of
                    the situation
                  </div>
                  <textarea
                    name={`${ps.id}_assessment`}
                    maxLength={4000}
                    required
                    value={formData[`${ps.id}_assessment`] || ""}
                    onChange={handleInputChange}
                  />
                  <div className="char-counter">
                    <span className="count">
                      {getCharCount(`${ps.id}_assessment`)}
                    </span>
                    /4000
                  </div>
                </div>

                <div className="text-field">
                  <label className="required">Recommendation:</label>
                  <div className="instruction">
                    *Note the proposed course of action/solution based off the
                    assessment
                  </div>
                  <textarea
                    name={`${ps.id}_recommendation`}
                    maxLength={4000}
                    required
                    value={formData[`${ps.id}_recommendation`] || ""}
                    onChange={handleInputChange}
                  />
                  <div className="char-counter">
                    <span className="count">
                      {getCharCount(`${ps.id}_recommendation`)}
                    </span>
                    /4000
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="submit-section">
          <button type="submit" className="btn-submit">
            Submit Assessment
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
