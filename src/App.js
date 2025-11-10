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
          "Buildings are safe, clean, well-ventilated, properly light, and heated/cooled."
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
      { category: "Milieu Safety", description: "Maltreatment occurrence is trending positively." },
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
        description: "Youth behavior and feedback suggest that they feel safe with the staff."
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
      "Youth have properly fitted and clean clothing that is appropriate for the seasons; essentials for personal care and hygiene are provided.",
      "Facility is clean, hygienic, in good structural repair and free of hazards where the living space is inviting and homelike.",
      "The facility has a maintenance program that adequately handles repair, upkeep and replacement."
    ],
    references: [
      "Rule 384 Behavior Treatment in Residential Child Care Facilities",
      "Rule 403 Licensing Standards for Group Homes",
      "Rule 404 Licensing Standards for Child Care Institutions and Maternity Centers",
      "Program Plan CFS-968 Section 5.0 Service Parameters"
    ],
    items: [
      {
        category: "Food",
        description:
          "Meals and snacks are available at appropriate times and include healthy options and alternatives for dietary restrictions."
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
        description: "Youth have their own clothes, not uniforms reflecting level systems."
      },
      {
        category: "Clothing",
        description:
          "Youth have clothes comparable to what other youth of similar age might wear."
      },
      {
        category: "Shelter",
        description:
          "Common areas are in good repair with adequate furniture and appropriate items for use."
      }
    ]
  },
  {
    id: "ps3",
    title:
      "<strong>PS3. Youth Experience.</strong> Youth experience is assessed as positive by ensuring youth safety, skill building, staff engagement and youth voice.",
    expectations: [
      "Youth and family are treated with respect; privacy and confidentiality are valued.",
      "Youth are informed of their rights and grievance procedures.",
      "Youth receive clear expectations and information about unit rules.",
      "Communication fosters youth voice and commitment to working through challenges.",
      "Programming and planning are sensitive to racial, cultural, religious and linguistic needs.",
      "Youth express positive experiences of safety, skills, and therapeutic interactions."
    ],
    references: [
      "Rule 384",
      "Administrative Procedures #30 Youth Voice",
      "Procedures 301, 301.100, 315.112",
      "Program Plan CFS-968 Sections 5.2.8, 5.2.7"
    ],
    items: [
      {
        category: "Skill Building",
        description:
          "Youth behavior and feedback suggest they are learning new coping and relationship skills."
      },
      {
        category: "Skill Building",
        description:
          "Youth engage in age and developmentally appropriate therapeutic recreational activities."
      },
      {
        category: "Staff Engagement",
        description:
          "Youth behavior and feedback suggest that they are treated with respect."
      },
      {
        category: "Staff Engagement",
        description:
          "Youth feel staff are supportive and can help them achieve goals."
      },
      {
        category: "Staff Engagement",
        description: "Appropriate boundaries are maintained between staff and youth."
      },
      {
        category: "Youth Voice",
        description:
          "Youth voice is included in treatment, transition, and discharge planning."
      },
      {
        category: "Youth Voice",
        description:
          "Youth voice is included in day-to-day activity decisions and grievances are addressed."
      }
    ]
  },
  {
    id: "ps4",
    title:
      "<strong>PS4. Youth and Family Driven Care.</strong> Youth and family driven approaches are utilized where youth are empowered, and family is central.",
    expectations: [
      "Youth/family are treated with respect and informed of rights and grievances.",
      "Assessment and treatment are youth/family centered.",
      "Communication fosters youth voice and family engagement.",
      "Services are sensitive to racial, cultural, religious, and linguistic needs.",
      "CFTMs are used to activate and maintain family participation.",
      "Family connections are incorporated into programming and visitation."
    ],
    references: [
      "Administrative Procedures #30 Youth Voice",
      "Procedures 301.100, 331",
      "Rules 384, 403, 404, 431",
      "Program Plan CFS-968 Sections 1.4, 5.0"
    ],
    items: [
      {
        category: "Youth Guided",
        description:
          "Youth are involved in decisions about treatment and permanency goals."
      },
      {
        category: "Youth Guided",
        description:
          "Youth identities and cultures are respected (gender, language, race/ethnicity, orientation)."
      },
      {
        category: "Family Driven",
        description:
          "Family connections are considered in treatment and permanency planning."
      },
      {
        category: "Family Driven",
        description:
          "There is shared responsibility for CFTM goals."
      },
      {
        category: "Family Driven",
        description:
          "Sibling/family visits are facilitated per plans."
      },
      {
        category: "Family Driven",
        description:
          "Agency hosts family-focused events/activities."
      },
      {
        category: "Family Driven",
        description:
          "Caregivers/families receive training and coaching."
      }
    ]
  },
  {
    id: "ps5",
    title:
      "<strong>PS5. Staff Training and Education.</strong> Staff are equipped with training, education, and supervision to provide quality services and supports to youth and families.",
    expectations: [
      "Training program includes pre-service training focusing on trauma.",
      "Training/consultation provided by individuals with trauma expertise.",
      "Staff are trained/certified for specialized services per contract.",
      "Mechanisms exist to maintain compliance with training/certification."
    ],
    references: [
      "Procedures 301.100, 302 (App K & M), 331",
      "Rules 384, 403, 404, 431",
      "Program Plan CFS-968 Sections 4.0, 5.0, 5.2.7.7"
    ],
    items: [
      {
        description:
          "Training curriculum addresses trauma and effects on child development."
      },
      {
        description:
          "All staff receive ongoing education in trauma model and behavior management."
      },
      { description: "Staff trained on youth-guided and culturally competent practices." },
      {
        description:
          "Training records identify who is trained, due, or needs remedial training."
      },
      { description: "Weekly multidisciplinary treatment team meetings occur." },
      {
        description:
          "Staff receive regular individual/group supervision."
      },
      {
        description:
          "Staff debrief stress reactions with supervisors."
      }
    ]
  },
  {
    id: "ps6",
    title:
      "<strong>PS6. Milieu Operations and Programming.</strong> There is a therapeutic environment that ensures safety, operational efficiency, and effective programming.",
    expectations: [
      "Effective collaboration/communication between professional and direct care staff.",
      "Staff actively and therapeutically engage youth.",
      "A skilled staff member leads each shift.",
      "Minimum staff/youth ratios maintained.",
      "Discipline aligns with Rule 384.",
      "Operations are structured, consistent, predictable.",
      "Reasonable and Prudent Parent Standard used.",
      "Plans exist for unexpected circumstances.",
      "Trauma informed practice evident in milieu.",
      "Programming supports engagement and treatment progress."
    ],
    references: [
      "Procedures 301.100, 302 App K, 315.135, 331",
      "Rules 384, 403, 404, 431",
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
          "Regular multidisciplinary meetings discuss youth behavior."
      },
      {
        category: "Operations",
        description:
          "Staff-to-youth ratio is maintained and adjusted for clinical acuity."
      },
      {
        category: "Programming",
        description:
          "Milieu is structured, consistent, predictable."
      },
      {
        category: "Programming",
        description:
          "Trauma-informed practice integrated into operations."
      },
      {
        category: "Programming",
        description:
          "Structured programming on weekdays, weekends, and non-school days."
      },
      {
        category: "Programming",
        description:
          "Goal-oriented skill-building groups and activities provided."
      },
      {
        category: "Programming",
        description:
          "Sensory/expressive therapies integrated."
      },
      {
        category: "Programming",
        description:
          "Respect for race/ethnicity, culture, orientation, and gender identity evident."
      }
    ]
  },
  {
    id: "ps7",
    title:
      "<strong>PS7. Clinical Programs.</strong> Prescribed clinical services are provided by qualified staff.",
    expectations: [
      "Adequate clinical services array (individual, group, family).",
      "Psychiatric services consistent and compliant.",
      "Sensory/expressive therapies incorporated as needed.",
      "Treatment plans are individualized, strengths-based, goal-oriented."
    ],
    references: [
      "Procedures 301.100",
      "Rule 325 Psychotropic Medications",
      "Rules 384, 403, 404",
      "Program Plan CFS-968 Sections 1.4, 4.0, 5.0"
    ],
    items: [
      {
        category: "Elements",
        description:
          "Youth receive therapy services as outlined in treatment plans."
      },
      {
        category: "Elements",
        description:
          "Alternatives to talk therapy (ABA, art, music, etc.) available where indicated."
      },
      {
        category: "Elements",
        description:
          "Psychiatry services provided as outlined."
      },
      {
        category: "Credentials",
        description:
          "Therapy provided/supervised by appropriately credentialed staff."
      },
      {
        category: "Credentials",
        description:
          "Alternative therapies led by experienced practitioners."
      },
      {
        category: "Credentials",
        description:
          "Psychotropic meds prescribed/monitored by licensed staff."
      }
    ]
  },
  {
    id: "ps8",
    title:
      "<strong>PS8. Management.</strong> Leadership and management practices demonstrate effective communication, governance, and operational management.",
    expectations: [
      "Mechanisms support communication and consistency among staff.",
      "Leadership can recruit/retain qualified staff.",
      "Leadership solicits and considers input from youth and staff.",
      "Program is managed by stable leadership team.",
      "High-risk situations reported with transparency.",
      "Responses to monitoring concerns are timely and adequate.",
      "Leadership hierarchy and roles are clearly defined.",
      "Executive management supports residential leaders.",
      "Strong clinical leadership integrated program-wide.",
      "Administrative systems are dependable."
    ],
    references: [
      "Rules 384, 403, 404",
      "Program Plan CFS-968 Sections 3.0, 8.0, 9.0"
    ],
    items: [
      "Communication: Effective communication systems among staff.",
      "Communication: Youth/family/CFTM input is solicited and considered.",
      "Communication: High-risk situations reported transparently.",
      "Leadership: Clear hierarchy and roles.",
      "Leadership: Executive management supports residential/clinical leaders.",
      "Leadership: Clinical leadership integrated.",
      "Management: Qualified staff are retained; turnover not excessive.",
      "Management: Policies and plans are regularly reviewed.",
      "Management: Governance includes board/advisory involvement."
    ]
  },
  {
    id: "ps9",
    title:
      "<strong>PS9. Quality Improvement Processes.</strong> A QI process with administrative systems and culture of improvement is implemented and maintained.",
    expectations: [
      "Environment supports continuous quality improvement.",
      "QI plan addresses Performance Standards.",
      "QI data shared with staff and leadership.",
      "Staff aware of Performance Standards.",
      "Improvement activities exist for key areas.",
      "QI Plan implemented, reviewed, updated.",
      "Post-discharge outcomes monitored."
    ],
    references: [
      "Procedures 301.100, 331",
      "Rules 384, 403, 404",
      "Program Plan CFS-968 Sections 2.0, 3.0, 8.0, 9.0"
    ],
    items: [
      {
        category: "Administrative systems",
        description: "Compliance with mandated reporting."
      },
      {
        category: "Administrative systems",
        description:
          "SERs are comprehensive, accurate, and timely."
      },
      {
        category: "Administrative systems",
        description:
          "Policies and procedures implemented with sustained progress."
      },
      {
        category: "Culture of improvement",
        description:
          "QI plan addresses key performance/improvement areas."
      },
      {
        category: "Culture of improvement",
        description:
          "QI activities implemented with sustained progress."
      },
      {
        category: "Culture of improvement",
        description:
          "Post-discharge outcomes are evaluated."
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
    const numeric =
      value === "" || Number.isNaN(Number(value)) ? "" : Number(value);

    let error = "";

    if (numeric === "" || numeric < 1 || numeric > 4) {
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

  // Scenario 2 (Next Step / QIP logic) is on hold.
// If/when it’s reinstated, reintroduce shouldShowNextStep here
// and re-enable the QIP banner markup in the assessment items.


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
    alert("Assessment submitted! Check console for full data.");
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

      <form onSubmit={handleSubmit}>
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

        {/* Header Comment */}
        <div className="comment-section">
          <label>Comment:</label>
          <textarea
            name="header_comment"
            maxLength={4000}
            value={formData.header_comment || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* Summary Table */}
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

        {/* PS Sections */}
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

                    {/* Scenario 2 (Next Step / QIP banner) is on hold.
                        Keeping markup commented so it can be re-enabled later. */}
                    {/*
                    <div
                      className={
                        "next-step-alert" +
                        (shouldShowNextStep(ps.id, scoreName)
                          ? " show"
                          : "")
                      }
                    >
                      Request Quality Improvement Plan (QIP)
                    </div>
                    */}

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

              {/* Overall PS Comment */}
              <div className="overall-comment-section">
                <h3>Overall Performance Standard Comment</h3>

                <div className="text-field">
                  <label className="required">Situation:</label>
                  <div className="instruction">
                    *Briefly describe the current situation or issue.
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
                    *Provide relevant context and prior actions.
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
                    *Summarize professional analysis/implications.
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
                    *Proposed course of action based on assessment.
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
