import { type FunctionComponent } from "react";

const ArticlePage: FunctionComponent = () => {
    return (
        <>
            <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Lilex:ital,wght@0,400;0,500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Stack+Sans+Text:ital,wght@0,400;0,500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;1,400&display=swap");

        .ap-root {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: #fff;
          align-items: center;
          gap: 44px;
          line-height: normal;
          letter-spacing: normal;
        }

        /* ── Section (hero) ── */
        .ap-section {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
          max-width: 100%;
          filter: blur(0);
          overflow: hidden;
          padding: 0px 280px 80px;
          background-image: url(/public/Section@3x.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
        }
        .ap-section-inner {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
          max-width: 100%;
          justify-content: space-between;
          padding: 80px 0px 0px;
          gap: 0px;
          flex-shrink: 0;
        }
        .ap-hero-badge-wrap {
          filter: blur(0);
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          max-width: 600px;
          text-align: left;
          font-size: 16px;
          color: #0b0c0f;
          font-family: Lilex, Arial, sans-serif;
        }
        .ap-badge {
          filter: blur(0);
          display: flex;
          width: 173px;
          height: 32px;
          border-radius: 4px;
          background-color: #f1f2f1;
          align-items: center;
          padding: 4px 8px 4px 6px;
          box-sizing: border-box;
          gap: 4px;
        }
        .ap-badge-icon {
          height: 20px;
          width: 20px;
          position: relative;
        }
        .ap-badge-text-wrap {
          height: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-badge-text {
          position: relative;
          line-height: 24px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .ap-hero-title-wrap {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 20px 0px 0px;
          font-size: 64px;
          color: #fff;
          font-family: Stack Sans Text, Arial, sans-serif;
        }
        .ap-hero-title {
          width: 100%;
          position: relative;
          letter-spacing: -1.5px;
          line-height: 76.8px;
          display: inline-block;
          max-width: 575.8px;
        }
        .ap-hero-sub-wrap {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          max-width: 100%;
          text-align: left;
          font-size: 32px;
          color: #fff;
          font-family: Inter, Arial, sans-serif;
        }
        .ap-hero-sub-inner {
          width: 100%;
          filter: blur(0);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 620px;
        }
        .ap-hero-subtitle {
          width: 100%;
          position: relative;
          line-height: 51.2px;
          display: inline-block;
          max-width: 620px;
        }

        /* ── Content section wrapper ── */
        .ap-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 96px 0px;
          box-sizing: border-box;
          max-width: 640px;
        }

        /* ── Blur1 (article meta) ── */
        .ap-blur1 {
          filter: blur(0);
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 12px 0px 24px;
          gap: 23.4px;
          text-align: left;
          font-size: 16px;
          color: #0b0c0f;
          font-family: Lilex, Arial, sans-serif;
        }
        .ap-blur1-badge {
          filter: blur(0);
          display: flex;
          width: 173px;
          height: 32px;
          border-radius: 4px;
          background-color: #f1f2f1;
          align-items: center;
          padding: 4px 8px 4px 6px;
          box-sizing: border-box;
          gap: 4px;
        }
        .ap-blur1-badge-icon {
          height: 20px;
          width: 20px;
          position: relative;
        }
        .ap-blur1-badge-text-wrap {
          height: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-blur1-emergency-care {
          position: relative;
          line-height: 24px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .ap-blur1-heading {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 48px;
          font-family: Stack Sans Text, Arial, sans-serif;
        }
        .ap-blur1-title {
          width: 100%;
          position: relative;
          letter-spacing: -0.72px;
          line-height: 64.8px;
          display: inline-block;
          max-width: 640px;
        }
        .ap-blur1-meta {
          align-self: stretch;
          padding: 0.6px 0px 0px;
          gap: 16px;
          display: flex;
          align-items: center;
        }
        .ap-blur1-tag {
          height: 34px;
          border-radius: 4px;
          border: 1px solid #e6e6e6;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 4px 8px;
          gap: 8px;
        }
        .ap-blur1-tag-icon {
          height: 18px;
          width: 18px;
          position: relative;
        }
        .ap-blur1-tag-author {
          position: relative;
          line-height: 24px;
          font-weight: 500;
        }
        .ap-blur1-tag-btn {
          cursor: pointer;
          border: 1px solid #e6e6e6;
          padding: 4px 8px;
          background-color: transparent;
          height: 34px;
          border-radius: 4px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ap-blur1-tag-btn-text {
          position: relative;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          font-family: Lilex, Arial, sans-serif;
          color: #0b0c0f;
          text-align: left;
        }

        /* ── Divider ── */
        .ap-divider {
          align-self: stretch;
          height: 2px;
          position: relative;
          border: 1px solid #e6e6e6;
          box-sizing: border-box;
        }

        /* ── Blur2 (article body) ── */
        .ap-blur2 {
          filter: blur(0);
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 40px 0px 0px;
          gap: 11px;
          text-align: left;
          font-size: 20px;
          color: #0b0c0f;
          font-family: Stack Sans Text, Arial, sans-serif;
        }
        .ap-b2-heading {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-b2-h3 {
          margin: 0;
          align-self: stretch;
          position: relative;
          font-size: inherit;
          line-height: 30px;
          font-weight: 400;
          font-family: inherit;
        }
        .ap-b2-body {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 0px 0.8px;
          font-size: 18px;
          color: #505050;
          font-family: Inter, Arial, sans-serif;
        }
        .ap-b2-para {
          width: 100%;
          position: relative;
          line-height: 28.8px;
          display: inline-block;
          max-width: 640px;
        }
        .ap-b2-figure {
          align-self: stretch;
          height: 430.8px;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          flex-shrink: 0;
          object-fit: cover;
        }
        .ap-b2-heading-padded {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 29px 0px 0px;
        }
        .ap-b2-list {
          align-self: stretch;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 5px 0px 0px;
          gap: 16px;
          text-align: left;
          font-size: 16px;
          color: #0b0c0f;
          font-family: Inter, Arial, sans-serif;
        }
        .ap-b2-item {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 0px 0px 36px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
        }
        .ap-b2-item-0 { background-image: url(/public/Item@3x.png); }
        .ap-b2-item-1 { background-image: url(/public/Item1@3x.png); }
        .ap-b2-item-2 { background-image: url(/public/Item2@3x.png); }
        .ap-b2-item-3 { background-image: url(/public/Item3@3x.png); }
        .ap-b2-item-4 { background-image: url(/public/Item4@3x.png); }
        .ap-b2-item-text {
          width: 100%;
          position: relative;
          line-height: 24px;
          display: inline-block;
          max-width: 604px;
        }
        .ap-b2-bold { font-weight: 500; line-height: 24px; }
        .ap-b2-dim { color: #505050; line-height: 24px; }
        .ap-b2-quote-wrap {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 29px 0px 0px;
          font-size: 24px;
        }
        .ap-b2-quote {
          width: 100%;
          position: relative;
          line-height: 36px;
          font-weight: 500;
          display: inline-block;
          max-width: 640px;
        }
        .ap-b2-conclusion {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 0px 0.9px;
          font-size: 18px;
          color: #505050;
          font-family: Inter, Arial, sans-serif;
        }

        /* ── Next Article ── */
        .ap-next {
          align-self: stretch;
          border-top: 1px solid #e6e6e6;
          box-sizing: border-box;
          padding: 124px 0px 0px;
          gap: 14px;
          max-width: 100%;
          text-align: left;
          font-size: 20px;
          color: #0b0c0f;
          font-family: Stack Sans Text, Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-next-heading {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-next-title {
          margin: 0;
          align-self: stretch;
          position: relative;
          font-size: inherit;
          line-height: 30px;
          font-weight: 400;
          font-family: inherit;
        }
        .ap-next-card {
          align-self: stretch;
          filter: blur(0);
          border-radius: 12px;
          background-color: #f1f2f1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px;
          box-sizing: border-box;
          gap: 0px;
          row-gap: 20px;
          max-width: 100%;
          font-size: 14px;
          color: #7791a5;
          font-family: Lilex, Arial, sans-serif;
        }
        .ap-next-card-content {
          flex: 1;
          padding: 0px 16px 0px 0px;
          box-sizing: border-box;
          gap: 85.7px;
          min-width: 175px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-next-card-inner {
          align-self: stretch;
          height: 277px;
          gap: 8px;
          min-width: 253px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-next-card-tag {
          width: 84px;
          height: 21px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ap-next-card-tag-text {
          position: relative;
          line-height: 21px;
          text-transform: uppercase;
        }
        .ap-next-card-heading {
          width: 253px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 36px 0px 0px;
          box-sizing: border-box;
          font-size: 24px;
          color: #0b0c0f;
          font-family: Stack Sans Text, Arial, sans-serif;
        }
        .ap-next-card-heading-text {
          width: 100%;
          position: relative;
          letter-spacing: -1.2px;
          line-height: 36px;
          display: inline-block;
          max-width: 253px;
        }
        .ap-next-card-desc {
          width: 253px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 16px;
          color: #505050;
          font-family: Inter, Arial, sans-serif;
        }
        .ap-next-card-desc-text {
          width: 100%;
          position: relative;
          line-height: 24px;
          display: inline-block;
          max-width: 253px;
        }
        .ap-next-card-btn {
          cursor: pointer;
          border: 0;
          padding: 8px 16px;
          background-color: #fff;
          width: 158px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .ap-next-card-btn-inner {
          height: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 3px;
        }
        .ap-next-card-btn-text {
          position: relative;
          font-size: 16px;
          line-height: 24px;
          text-transform: uppercase;
          font-weight: 500;
          font-family: Lilex, Arial, sans-serif;
          color: #0b0c0f;
          text-align: left;
        }
        .ap-next-card-arrow {
          height: 24px;
          width: 24px;
          position: relative;
        }
        .ap-next-card-img {
          width: 323px;
          position: relative;
          border-radius: 4px;
          max-height: 100%;
          object-fit: cover;
          max-width: 100%;
        }

        /* ── Responsive ── */
        @media screen and (max-width: 1050px) {
          .ap-section { padding-left: 140px; padding-right: 140px; }
          .ap-hero-title { font-size: 51px; line-height: 61px; }
          .ap-hero-subtitle { font-size: 26px; line-height: 41px; }
          .ap-blur1-title { font-size: 38px; line-height: 52px; }
        }
        @media screen and (max-width: 750px) {
          .ap-root { gap: 22px; }
          .ap-section { padding-left: 70px; padding-right: 70px; padding-bottom: 52px; }
          .ap-section-inner { padding-top: 52px; }
          .ap-hero-title, .ap-hero-subtitle, .ap-blur1-title { max-width: 100%; }
          .ap-content { padding-top: 26px; padding-bottom: 26px; max-width: 100%; }
          .ap-blur1-meta { flex-wrap: wrap; }
          .ap-next { padding-top: 81px; }
          .ap-next-card { flex-wrap: wrap; }
          .ap-next-card-img { flex: 1; }
          .ap-b2-para, .ap-b2-item-text, .ap-b2-quote { max-width: 100%; }
        }
        @media screen and (max-width: 450px) {
          .ap-hero-title { font-size: 38px; line-height: 46px; }
          .ap-hero-subtitle { font-size: 19px; line-height: 31px; }
          .ap-blur1-title { font-size: 29px; line-height: 39px; }
          .ap-next-title { font-size: 16px; line-height: 24px; }
          .ap-next-card { padding-top: 20px; padding-bottom: 20px; }
          .ap-next-card-content { gap: 43px; }
          .ap-next-card-heading-text { font-size: 19px; line-height: 29px; }
          .ap-b2-h3 { font-size: 16px; line-height: 24px; }
          .ap-b2-quote { font-size: 19px; line-height: 29px; }
        }
      `}</style>

            <div className="ap-root">
                {/* ── Hero Section ── */}
                <main className="ap-section">
                    <div className="ap-section-inner">
                        <div className="ap-hero-badge-wrap">
                            <div className="ap-badge">
                                <img
                                    className="ap-badge-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/Container.svg"
                                />
                                <div className="ap-badge-text-wrap">
                                    <div className="ap-badge-text">EMERGENCY CARE</div>
                                </div>
                            </div>
                            <div className="ap-hero-title-wrap">
                                <div className="ap-hero-title">
                                    What is ICU on Wheels And Why Balangir Needed It.
                                </div>
                            </div>
                        </div>
                        <div className="ap-hero-sub-wrap">
                            <div className="ap-hero-sub-inner">
                                <div className="ap-hero-subtitle">
                                    How Swaraj's Advanced Life Support Ambulance is changing
                                    emergency response across western Odisha.
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* ── Article Content ── */}
                <div className="ap-content">
                    {/* Article Meta (Blur1) */}
                    <section className="ap-blur1">
                        <div className="ap-blur1-badge">
                            <img
                                className="ap-blur1-badge-icon"
                                loading="lazy"
                                alt=""
                                src="/Container.svg"
                            />
                            <div className="ap-blur1-badge-text-wrap">
                                <div className="ap-blur1-emergency-care">EMERGENCY CARE</div>
                            </div>
                        </div>
                        <div className="ap-blur1-heading">
                            <div className="ap-blur1-title">
                                The ambulance that thinks like an ICU
                            </div>
                        </div>
                        <div className="ap-blur1-meta">
                            <div className="ap-blur1-tag">
                                <img
                                    className="ap-blur1-tag-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/Container1.svg"
                                />
                                <div className="ap-blur1-badge-text-wrap">
                                    <div className="ap-blur1-tag-author">DR. ANKIT PADHI</div>
                                </div>
                            </div>
                            <button className="ap-blur1-tag-btn">
                                <img
                                    className="ap-blur1-tag-icon"
                                    alt=""
                                    src="/Container2.svg"
                                />
                                <div className="ap-blur1-tag-btn-text">JUNE 2025</div>
                            </button>
                            <button className="ap-blur1-tag-btn">
                                <img
                                    className="ap-blur1-tag-icon"
                                    alt=""
                                    src="/Container3.svg"
                                />
                                <div className="ap-blur1-tag-btn-text">5 Min Read</div>
                            </button>
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="ap-divider" />

                    {/* Article Body (Blur2) */}
                    <div className="ap-blur2">
                        <div className="ap-b2-heading">
                            <h3 className="ap-b2-h3">The Gap</h3>
                        </div>
                        <div className="ap-b2-body">
                            <div className="ap-b2-para">
                                In a medical emergency, the first hour is everything. Doctors
                                call it the golden hour — the window in which rapid, skilled
                                intervention can mean the difference between recovery and
                                irreversible damage. For decades, patients across western Odisha
                                faced a devastating gap: the nearest advanced emergency facility
                                was hours away in Bhubaneswar or Raipur. By the time an
                                ambulance arrived and completed the journey, the golden hour was
                                long gone.
                                <br />
                                Swaraj Hospital set out to close that gap.
                            </div>
                        </div>
                        <img
                            className="ap-b2-figure"
                            loading="lazy"
                            alt=""
                            src="/Figure@2x.png"
                        />
                        <div className="ap-b2-heading-padded">
                            <h3 className="ap-b2-h3">The Clinical Ecosystem</h3>
                        </div>
                        <div className="ap-b2-body">
                            <div className="ap-b2-para">
                                The ICU on Wheels is not a transport vehicle with a stretcher.
                                It is a fully equipped Advanced Life Support ambulance —
                                staffed, stocked and capable of delivering critical care from
                                the moment it reaches a patient. The journey to the hospital
                                becomes an extension of the emergency department, not dead time.
                            </div>
                        </div>
                        <div className="ap-b2-heading-padded">
                            <h3 className="ap-b2-h3">What ICU on Wheels carries:</h3>
                        </div>
                        <section className="ap-b2-list">
                            {[
                                {
                                    label: "Cardiac Monitoring:",
                                    desc: " Continuous ECG and vital signs tracking during transit for real-time clinical assessment.",
                                    cls: "ap-b2-item-0",
                                },
                                {
                                    label: "Ventilator Support:",
                                    desc: " Mechanical ventilation for patients with compromised breathing, managed by trained paramedics.",
                                    cls: "ap-b2-item-1",
                                },
                                {
                                    label: "Defibrillation:",
                                    desc: " Immediate cardiac shock capability for patients in ventricular fibrillation or cardiac arrest.",
                                    cls: "ap-b2-item-2",
                                },
                                {
                                    label: "IV Access & Medication:",
                                    desc: " Emergency drugs, fluid resuscitation and IV line management throughout the journey.",
                                    cls: "ap-b2-item-3",
                                },
                                {
                                    label: "Oxygen Supply:",
                                    desc: " Regulated oxygen delivery for trauma, cardiac and respiratory emergencies.",
                                    cls: "ap-b2-item-4",
                                },
                            ].map(({ label, desc, cls }) => (
                                <div key={label} className={`ap-b2-item ${cls}`}>
                                    <div className="ap-b2-item-text">
                                        <span className="ap-b2-bold">{label}</span>
                                        <span className="ap-b2-dim">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <div className="ap-b2-quote-wrap">
                            <div className="ap-b2-quote">
                                "True emergency care begins at the patient's location, not at
                                the hospital door. The ICU on Wheels exists because every minute
                                between the two matters."
                            </div>
                        </div>
                        <div className="ap-b2-heading-padded">
                            <h3 className="ap-b2-h3">{`The Result & Promise`}</h3>
                        </div>
                        <div className="ap-b2-conclusion">
                            <i className="ap-b2-para">
                                Ultimately, the ICU on Wheels is a statement about what Swaraj
                                Hospital believes. It believes that geography should not
                                determine the quality of care a person receives. That a family
                                in a village outside Balangir deserves the same first response
                                as a patient in any metro city in India. Behind every callout,
                                every dispatch, every arrival — there is a team committed to
                                making that belief real.
                            </i>
                        </div>
                    </div>

                    {/* Next Article */}
                    <section className="ap-next">
                        <div className="ap-next-heading">
                            <h3 className="ap-next-title">Next Article</h3>
                        </div>
                        <div className="ap-next-card">
                            <div className="ap-next-card-content">
                                <div className="ap-next-card-inner">
                                    <div className="ap-next-card-tag">
                                        <div className="ap-next-card-tag-text">MATERNITY:</div>
                                    </div>
                                    <div className="ap-next-card-heading">
                                        <div className="ap-next-card-heading-text">
                                            Preparing for a Safe Delivery — What to Expect at Swaraj
                                        </div>
                                    </div>
                                    <div className="ap-next-card-desc">
                                        <div className="ap-next-card-desc-text">
                                            From your first consultation to post-delivery care — a
                                            step-by-step guide for expecting mothers in western
                                            Odisha.
                                        </div>
                                    </div>
                                </div>
                                <button className="ap-next-card-btn">
                                    <div className="ap-next-card-btn-inner">
                                        <div className="ap-next-card-btn-text">Learn more</div>
                                    </div>
                                    <img
                                        className="ap-next-card-arrow"
                                        alt=""
                                        src="/merged-asset-1.svg"
                                    />
                                </button>
                            </div>
                            <img
                                className="ap-next-card-img"
                                loading="lazy"
                                alt=""
                                src="/Container4@2x.png"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
