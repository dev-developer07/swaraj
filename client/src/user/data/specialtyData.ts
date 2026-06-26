export interface SpecialtyItem {
  label: string;
  desc: string;
}

export interface SpecialtyData {
  id: string;
  name: string;
  heroSubtext: string;
  boldIntro: string;
  mutedIntro: string;
  intervention1Title: string;
  intervention1Label: string;
  intervention2Title: string;
  intervention2Label: string;
  listHeading: string;
  listItems: SpecialtyItem[];
  statNumber: string;
  statTitle: string;
  statDesc: string;
  noteBold: string;
  noteMuted: string;
  contactDesc: string;
}

export const SPECIALTY_DETAILS: Record<string, SpecialtyData> = {
  cardiology: {
    id: "cardiology",
    name: "Cardiology",
    heroSubtext: "Advanced heart care, diagnostics and intervention for every stage of cardiac health.",
    boldIntro: "Cardiology",
    mutedIntro: "at Swaraj Hospital is built around early detection, accurate diagnosis and timely intervention. Heart conditions rarely announce themselves clearly — our approach focuses on identifying risk before it becomes a crisis, and treating conditions with the full clinical support of a dedicated Cath Lab, advanced imaging and a specialist cardiac team.",
    intervention1Title: "Advanced Cardiac Imaging & Diagnostics",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Cath Lab Intervention & Assessment",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "ECG & Holter Monitoring:",
        desc: " Continuous cardiac rhythm analysis to detect underlying electrical abnormalities."
      },
      {
        label: "Echocardiography:",
        desc: " Real-time ultrasound imaging of heart structure and function."
      },
      {
        label: "TMT — Treadmill Stress Test:",
        desc: " Evaluating cardiac response under controlled physical stress conditions."
      },
      {
        label: "Coronary Angiography:",
        desc: " Direct visualisation of coronary arteries to detect blockages and plan intervention."
      }
    ],
    statNumber: "#1",
    statTitle: "Cardiac Procedures Supported",
    statDesc: "Coronary Angiography · Angioplasty · Pacemaker Implantation — performed with surgical precision and post-procedure monitoring.",
    noteBold: "A note on long-term cardiac health:",
    noteMuted: " The success of cardiac treatment depends as much on lifestyle and follow-up as on the procedure itself. Our team works with you beyond the consultation — guiding you through recovery, medication, diet and monitoring to protect your heart for the long term.",
    contactDesc: "We work with experienced cardiac specialists and diagnostic teams to answer every question before your first visit."
  },
  "general-medicine": {
    id: "general-medicine",
    name: "General Medicine",
    heroSubtext: "Comprehensive diagnosis and treatment of acute and chronic conditions for patients of all ages.",
    boldIntro: "General Medicine",
    mutedIntro: "at Swaraj Hospital focuses on the prevention, diagnosis, and non-surgical treatment of complex adult illnesses. Our general physicians serve as the primary point of contact for patients, managing multi-system disorders and chronic conditions with comprehensive wellness plans and integrated diagnostic care.",
    intervention1Title: "Primary Consultation & Diagnostics",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Chronic Disease Management",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Preventative Screening:",
        desc: " Regular health check-ups and metabolic profiling to identify health risks early."
      },
      {
        label: "Diabetes & Hypertension Care:",
        desc: " Customized treatment plans to keep your blood sugar and blood pressure in optimal range."
      },
      {
        label: "Infectious Diseases:",
        desc: " Effective management of seasonal and chronic infections with evidence-based medicine."
      },
      {
        label: "Geriatric Medicine:",
        desc: " Specialized clinical attention for senior citizens with multiple age-related health needs."
      }
    ],
    statNumber: "15+",
    statTitle: "Years of Medical Excellence",
    statDesc: "Comprehensive patient care covering acute illness, metabolic disorders, and chronic condition management.",
    noteBold: "A note on general well-being:",
    noteMuted: " Managing your long-term health requires a partnership. We work closely with you on nutrition, lifestyle adjustments, and consistent follow-ups to maintain your physical vitality.",
    contactDesc: "We work with experienced medical specialists and diagnostic teams to answer every question before your first visit."
  },
  "general-surgery": {
    id: "general-surgery",
    name: "General Surgery",
    heroSubtext: "Surgical care for a broad range of conditions with a focus on precision, safety and swift recovery.",
    boldIntro: "General Surgery",
    mutedIntro: "at Swaraj Hospital delivers high-quality surgical interventions for conditions affecting the abdomen, endocrine system, gastrointestinal tract, and soft tissues. Our team utilizes modern operating suites and sterile protocols to ensure clinical safety, minimize discomfort, and speed up post-operative healing.",
    intervention1Title: "Pre-Surgical Diagnosis & Screening",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Modern Surgical Intervention",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Hernia Reparation:",
        desc: " Advanced open and laparoscopic surgical repairs for abdominal and inguinal hernias."
      },
      {
        label: "Appendectomy:",
        desc: " Swift and safe removal of the appendix under acute emergency or planned procedures."
      },
      {
        label: "Gallbladder Removal:",
        desc: " Cholecystectomy performed with precision to treat gallstones and inflammation."
      },
      {
        label: "Trauma Surgery:",
        desc: " 24/7 emergency surgical support for critical care and soft tissue trauma."
      }
    ],
    statNumber: "#1",
    statTitle: "Surgical Outcomes & Safety",
    statDesc: "Pre-accredited clinical setups ensuring minimal infection rates, modern anesthesia, and round-the-clock recovery support.",
    noteBold: "A note on post-surgical recovery:",
    noteMuted: " Following post-operative guidelines is crucial for optimal healing. Our surgical specialists and physiotherapists monitor your progress closely to ensure you return to normal activity safely.",
    contactDesc: "We work with experienced general surgeons and diagnostic teams to answer every question before your first visit."
  },
  "obstetrics-gynaecology": {
    id: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    heroSubtext: "Complete women's health care — from routine gynaecological consultations to high-risk pregnancy and delivery.",
    boldIntro: "Obstetrics & Gynaecology",
    mutedIntro: "at Swaraj Hospital is designed around the unique health journeys of women at all stages of life. We provide comprehensive maternal care, high-risk pregnancy management, neonatal backup, and advanced gynaecological surgical solutions with privacy, empathy, and specialized clinical care.",
    intervention1Title: "Maternal Health & Fetal Assessment",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Labour & Gynaecological Surgery",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Antenatal Care:",
        desc: " Consistent maternal monitoring, ultrasound scans, and nutritional support during pregnancy."
      },
      {
        label: "High-Risk Pregnancy:",
        desc: " Advanced clinical protocols for gestational diabetes, preeclampsia, and multiple births."
      },
      {
        label: "Laparoscopic Gynaecology:",
        desc: " Minimally invasive surgical procedures for ovarian cysts, fibroids, and hysterectomy."
      },
      {
        label: "Menopause Management:",
        desc: " Hormone profiling, bone density counseling, and wellness support for mature women."
      }
    ],
    statNumber: "24/7",
    statTitle: "Maternity & Delivery Backup",
    statDesc: "Dedicated labour suites, advanced ultrasound, and 24/7 neonatal intensive care support (NICU).",
    noteBold: "A note on maternal wellness:",
    noteMuted: " Every pregnancy is unique. Early registration and regular clinical check-ups safeguard both mother and child. Our team offers constant support throughout your prenatal and postpartum phases.",
    contactDesc: "We work with experienced obstetricians and gynaecological specialists to answer every question before your first visit."
  },
  "orthopaedics-joint-replacement": {
    id: "orthopaedics-joint-replacement",
    name: "Orthopaedics & Joint Replacement",
    heroSubtext: "Advanced bone, joint and spine treatment including surgical replacement and rehabilitation support.",
    boldIntro: "Orthopaedics & Joint Replacement",
    mutedIntro: "at Swaraj Hospital offers comprehensive care for musculoskeletal conditions. From arthroscopic surgery and complex trauma reconstruction to knee and hip joint replacements, our orthopaedic specialists combine surgical skill with dedicated physiotherapy to restore mobility and eliminate pain.",
    intervention1Title: "Joint Assessment & Imaging",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Joint Reconstruction & Surgery",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Total Knee Replacement:",
        desc: " Advanced surgical replacement of the knee joint with long-lasting implants for osteoarthritis."
      },
      {
        label: "Hip Arthroplasty:",
        desc: " High-precision joint replacement to treat severe hip pain and fractures."
      },
      {
        label: "Arthroscopy & Sports Medicine:",
        desc: " Minimally invasive keyhole surgery for ligament tears (ACL/MCL) and meniscus repairs."
      },
      {
        label: "Orthopaedic Trauma Care:",
        desc: " Comprehensive emergency stabilization and surgical plating for complex fractures."
      }
    ],
    statNumber: "#1",
    statTitle: "Mobility Restored",
    statDesc: "Highly specialized joint implants, computerized surgical alignment, and dedicated post-op rehabilitation programs.",
    noteBold: "A note on physical rehabilitation:",
    noteMuted: " Successful recovery from joint surgery depends heavily on post-operative physiotherapy. Our rehabilitation team guides you through customized exercises to safely rebuild strength and range of motion.",
    contactDesc: "We work with experienced orthopaedic surgeons and physical therapists to answer every question before your first visit."
  },
  "paediatrics-neonatology": {
    id: "paediatrics-neonatology",
    name: "Paediatrics & Neonatology",
    heroSubtext: "Dedicated care for newborns, infants and children — including a specialist NICU for critical neonatal cases.",
    boldIntro: "Paediatrics & Neonatology",
    mutedIntro: "at Swaraj Hospital is designed to provide sensitive, comprehensive, and expert care for young patients from birth through adolescence. Supported by a modern Neonatal Intensive Care Unit (NICU), our paediatricians manage complex congenital disorders, developmental growth, and child healthcare.",
    intervention1Title: "Growth, Development & Screening",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Neonatal Care & NICU Management",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Neonatal Intensive Care (NICU):",
        desc: " Specialized support for premature babies, respiratory distress, and low birth weight newborns."
      },
      {
        label: "Immunisation & Vaccination:",
        desc: " Comprehensive child vaccination schedules following international paediatric standards."
      },
      {
        label: "Paediatric Asthma & Allergy:",
        desc: " Diagnosis and management of respiratory allergies and asthma in growing children."
      },
      {
        label: "Developmental Screening:",
        desc: " Tracking motor, language, and cognitive development milestones to address delays early."
      }
    ],
    statNumber: "24/7",
    statTitle: "Paediatric Emergency Care",
    statDesc: "Round-the-clock paediatrician coverage, dedicated NICU beds, and child-friendly clinical environments.",
    noteBold: "A note on childhood health:",
    noteMuted: " Regular wellness checks and timely immunisation are key to a child's healthy future. Our paediatric team provides compassionate guidance on growth, pediatric nutrition, and childhood safety.",
    contactDesc: "We work with experienced paediatricians and neonatal specialists to answer every question before your first visit."
  },
  "minimal-access-laparoscopic-surgery": {
    id: "minimal-access-laparoscopic-surgery",
    name: "Minimal Access & Laparoscopic Surgery",
    heroSubtext: "Minimally invasive surgical procedures for faster recovery, reduced pain and shorter hospital stays.",
    boldIntro: "Minimal Access Surgery",
    mutedIntro: "at Swaraj Hospital utilizes advanced high-definition cameras and specialised surgical tools to perform complex procedures through keyhole incisions. This modern technique ensures significantly less post-surgical pain, minimal scarring, shorter hospitalizations, and a much faster return to daily life.",
    intervention1Title: "High-Definition Laparoscopy",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Keyhole Surgical Interventions",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Laparoscopic Cholecystectomy:",
        desc: " Minimally invasive removal of the gallbladder to treat gallstones and inflammation."
      },
      {
        label: "Laparoscopic Hernioplasty:",
        desc: " Precision keyhole repairs of abdominal hernias with mesh placement."
      },
      {
        label: "Diagnostic Laparoscopy:",
        desc: " Direct visual evaluation of the abdominal cavity to diagnose unexplained chronic pain."
      },
      {
        label: "Laparoscopic Hysterectomy:",
        desc: " Safe, minimally invasive removal of the uterus with reduced recovery time."
      }
    ],
    statNumber: "#1",
    statTitle: "Minimally Invasive Care",
    statDesc: "State-of-the-art laparoscopy towers, high-definition visualization systems, and specialized keyhole instruments.",
    noteBold: "A note on keyhole healing:",
    noteMuted: " Because laparoscopic incisions are small, healing is rapid. However, avoiding heavy exertion for the recommended period is essential. Our clinical team provides step-by-step recovery guidance.",
    contactDesc: "We work with experienced laparoscopic surgeons and diagnostic teams to answer every question before your first visit."
  },
  ophthalmology: {
    id: "ophthalmology",
    name: "Ophthalmology",
    heroSubtext: "Complete eye care — from routine consultations and prescriptions to surgical intervention and post-operative support.",
    boldIntro: "Ophthalmology",
    mutedIntro: "at Swaraj Hospital is dedicated to preserving and restoring your vision. We offer a full range of eye care services, combining advanced diagnostic imaging with modern surgical treatments for cataracts, glaucoma, retinal diseases, and refractive errors in a sterile, patient-centered clinical environment.",
    intervention1Title: "Ophthalmic Assessment & Scan",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Micro-Surgical Vision Care",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Cataract Surgery (Phaco):",
        desc: " No-stitch, micro-incision cataract surgery with advanced intraocular lens (IOL) implantation."
      },
      {
        label: "Glaucoma Screening:",
        desc: " Intraocular pressure monitoring and visual field testing to prevent optic nerve damage."
      },
      {
        label: "Diabetic Retinopathy Care:",
        desc: " Retinal mapping and therapeutic interventions for diabetic patients."
      },
      {
        label: "Refractive Error Correction:",
        desc: " Precise computerized vision testing and prescription of custom glasses or lenses."
      }
    ],
    statNumber: "100%",
    statTitle: "Sterile Ophthalmic Theatre",
    statDesc: "Specialized ophthalmic microscopes, precise ultrasound phacoemulsification, and sterile recovery wards.",
    noteBold: "A note on vision preservation:",
    noteMuted: " Eye diseases like glaucoma often progress without early warning signs. Regular eye check-ups, especially for diabetic patients and individuals over 40, are vital to preventing vision loss.",
    contactDesc: "We work with experienced eye specialists and diagnostic teams to answer every question before your first visit."
  },
  neurology: {
    id: "neurology",
    name: "Neurology",
    heroSubtext: "Specialist diagnosis and treatment of brain, spine and nervous system conditions with advanced imaging support.",
    boldIntro: "Neurology",
    mutedIntro: "at Swaraj Hospital offers expert care for neurological disorders affecting the brain, spinal cord, nerves, and muscles. Our clinical team combines detailed cognitive examinations with advanced diagnostic imaging to treat stroke, epilepsy, migraines, neuropathies, and spine disorders.",
    intervention1Title: "Electrodiagnosis & Neuro-imaging",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Neuro-therapeutics & Rehab",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Stroke Management:",
        desc: " Rapid clinical protocols and emergency interventions to limit brain damage during stroke."
      },
      {
        label: "Epilepsy Clinic:",
        desc: " Comprehensive EEG analysis and customized anti-epileptic medication management."
      },
      {
        label: "Neuropathy Treatment:",
        desc: " Detailed nerve conduction studies to diagnose and treat peripheral neuropathy and pain."
      },
      {
        label: "Headache & Migraine Care:",
        desc: " Identifying triggers and tailoring preventive therapies for severe chronic headaches."
      }
    ],
    statNumber: "#1",
    statTitle: "Neurological Care Units",
    statDesc: "Advanced electroencephalogram (EEG), nerve conduction studies (NCS), and specialized neurological rehabilitation.",
    noteBold: "A note on brain health:",
    noteMuted: " Time is brain. In cases of stroke or sudden numbness, seeking immediate medical care is absolutely critical. Our neurology team is prepared for rapid response and emergency management.",
    contactDesc: "We work with experienced neurologists and diagnostic teams to answer every question before your first visit."
  },
  urology: {
    id: "urology",
    name: "Urology",
    heroSubtext: "Comprehensive urological care for conditions affecting the kidney, bladder and urinary tract in men and women.",
    boldIntro: "Urology",
    mutedIntro: "at Swaraj Hospital provides specialized medical and surgical treatments for the urinary-tract system. We offer clinical solutions for kidney stones, prostate enlargement, urinary tract infections (UTIs), and bladder disorders with advanced diagnostic tools and minimally invasive urological techniques.",
    intervention1Title: "Urological Imaging & Cystoscopy",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Endourology & Lithotripsy",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Kidney Stone Management:",
        desc: " Endoscopic laser lithotripsy and non-surgical procedures to dissolve or break kidney stones."
      },
      {
        label: "Prostate Surgery (TURP):",
        desc: " Modern surgical resection to treat benign prostatic hyperplasia (BPH) and ease urination."
      },
      {
        label: "Urinary Tract Infection Care:",
        desc: " Urine cultures and targeted antibiotic therapies to treat recurrent kidney and bladder infections."
      },
      {
        label: "Incontinence Therapy:",
        desc: " Comprehensive bladder training, pelvic floor exercises, and surgical options for bladder control."
      }
    ],
    statNumber: "#1",
    statTitle: "Urological Interventions",
    statDesc: "Advanced lithotripsy systems, rigid/flexible cystoscopy, and minimally invasive endourological setups.",
    noteBold: "A note on hydration & kidney health:",
    noteMuted: " Many urological problems, particularly kidney stones, can be prevented by maintaining high daily water intake. Our urologists counsel you on hydration, dietary adjustments, and early symptoms.",
    contactDesc: "We work with experienced urologists and diagnostic teams to answer every question before your first visit."
  },
  "dental-maxillofacial-surgery": {
    id: "dental-maxillofacial-surgery",
    name: "Dental & Maxillofacial Surgery",
    heroSubtext: "Oral health, dental surgery and complex maxillofacial procedures performed by experienced surgical specialists.",
    boldIntro: "Dental & Maxillofacial Care",
    mutedIntro: "at Swaraj Hospital covers everything from routine dental care to complex reconstructive surgeries of the jaw, face, and mouth. Our team combines conservative dentistry with specialized maxillofacial surgical expertise to treat dental trauma, jaw fractures, oral pathologies, and wisdom tooth complications.",
    intervention1Title: "Oral Pathology & Digital X-Ray",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Oral & Maxillofacial Reconstruction",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Impacted Wisdom Teeth:",
        desc: " Surgical extraction of wisdom teeth to alleviate pain, crowding, and infection risk."
      },
      {
        label: "Facial Trauma Surgery:",
        desc: " Precision plating and stabilization of jaw, cheekbone, and orbital bone fractures."
      },
      {
        label: "Root Canal Therapy (RCT):",
        desc: " Endodontic treatments to save infected teeth and eliminate toothache."
      },
      {
        label: "Dental Implants:",
        desc: " Advanced titanium implants to replace missing teeth and restore complete oral function."
      }
    ],
    statNumber: "#1",
    statTitle: "Dental Trauma Support",
    statDesc: "Specialist maxillofacial surgeons, digital dental imaging, and highly sterilized dental operatory suites.",
    noteBold: "A note on oral hygiene:",
    noteMuted: " Oral health is a window to your overall well-being. Regular scaling, bi-annual dental check-ups, and early treatment of gum issues prevent complex infections and teeth loss.",
    contactDesc: "We work with experienced dental surgeons and maxillofacial specialists to answer every question before your first visit."
  },
  gastroenterology: {
    id: "gastroenterology",
    name: "Gastroenterology",
    heroSubtext: "Diagnosis and management of digestive system conditions including endoscopy and advanced gastrointestinal care.",
    boldIntro: "Gastroenterology",
    mutedIntro: "at Swaraj Hospital focuses on the comprehensive management of liver, pancreas, gallbladder, and gastrointestinal diseases. Equipped with high-resolution endoscopy and colonoscopy towers, our gastroenterologists specialize in identifying digestive disorders, treating acid reflux, ulcers, and managing chronic liver conditions.",
    intervention1Title: "Diagnostic Endoscopy & Colonoscopy",
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: "Gastrointestinal Interventions",
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Upper GI Endoscopy:",
        desc: " Visual assessment of the esophagus, stomach, and duodenum to diagnose acidity and ulcers."
      },
      {
        label: "Colonoscopy Screening:",
        desc: " Complete imaging of the large intestine to screen for polyps, colitis, and chronic diarrhea."
      },
      {
        label: "Liver & Pancreatic Care:",
        desc: " Diagnosis and management of fatty liver, hepatitis, cirrhosis, and pancreatitis."
      },
      {
        label: "Acidity & GERD Clinic:",
        desc: " Custom lifestyle guidelines and medical therapy to manage chronic acid reflux."
      }
    ],
    statNumber: "#1",
    statTitle: "Endoscopic Diagnostics",
    statDesc: "Advanced high-definition endoscopy towers, therapeutic polypectomy, and sterile biopsy sampling services.",
    noteBold: "A note on gut health:",
    noteMuted: " Chronic digestive symptoms like bloating, changes in bowel habits, or acidity should not be ignored. Early diagnostic endoscopy is safe and offers vital diagnostic clarity for effective care.",
    contactDesc: "We work with experienced gastroenterologists and diagnostic teams to answer every question before your first visit."
  }
};

// Add normalization and fallback helpers
export const getSpecialtyData = (slug: string): SpecialtyData => {
  const normalized = slug.toLowerCase().trim();
  
  // Directly return if matched
  if (SPECIALTY_DETAILS[normalized]) {
    return SPECIALTY_DETAILS[normalized];
  }
  
  // Try matching with variations
  const variantsMap: Record<string, string> = {
    "obstetrics-and-gynaecology": "obstetrics-gynaecology",
    "orthopedics-joint-replacement": "orthopaedics-joint-replacement",
    "orthopaedics-and-joint-replacement": "orthopaedics-joint-replacement",
    "pediatrics-neonatology": "paediatrics-neonatology",
    "paediatrics-and-neonatology": "paediatrics-neonatology",
    "pediatrics": "paediatrics-neonatology",
    "minimal-access-and-laparoscopic-surgery": "minimal-access-laparoscopic-surgery",
    "dental-and-maxillofacial-surgery": "dental-maxillofacial-surgery"
  };
  
  const mappedSlug = variantsMap[normalized];
  if (mappedSlug && SPECIALTY_DETAILS[mappedSlug]) {
    return SPECIALTY_DETAILS[mappedSlug];
  }

  // Fallback dynamic generator for other specialties (e.g. oncology, dermatology, pulmonology, endocrinology)
  const title = normalized
    .split("-")
    .map(word => {
      if (word === "and") return "&";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return {
    id: normalized,
    name: title,
    heroSubtext: `Expert diagnostics, treatment and compassionate care in ${title} at Swaraj Hospital.`,
    boldIntro: title,
    mutedIntro: `at Swaraj Hospital is dedicated to providing high-quality care, early intervention, and patient-centered treatment plans designed for your unique health needs. We combine modern diagnostics with skilled clinical care to support your recovery.`,
    intervention1Title: `Advanced ${title} Diagnostics`,
    intervention1Label: "DIAGNOSTIC ACCURACY",
    intervention2Title: `Comprehensive ${title} Therapy`,
    intervention2Label: "THERAPEUTIC STRATEGY",
    listHeading: "Depending on your unique needs, the interventions may include:",
    listItems: [
      {
        label: "Specialist Consultation:",
        desc: " In-depth evaluation by experienced medical experts to diagnose health issues."
      },
      {
        label: "Advanced Diagnostics:",
        desc: " Access to state-of-the-art laboratory testing and diagnostic tools."
      },
      {
        label: "Custom Treatment Plans:",
        desc: " Customised therapeutic strategies designed around your risk profile."
      },
      {
        label: "Long-term Monitoring:",
        desc: " Dedicated follow-ups to ensure stable recovery and health maintenance."
      }
    ],
    statNumber: "#1",
    statTitle: `${title} Services`,
    statDesc: `Highly professional medical and support services structured to provide optimal outcomes and patient satisfaction.`,
    noteBold: `A note on long-term wellness:`,
    noteMuted: ` Continuous attention and regular medical follow-ups are critical for chronic disease management. Our team stands ready to assist in your healthcare path.`,
    contactDesc: `We work with experienced specialists and diagnostic teams to answer every question before your first visit.`
  };
};

export const getSpecialtySlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/ & /g, "-")
    .replace(/\s+/g, "-");
};
