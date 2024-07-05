import "./index.css";

const Services = () => {
  return (
    <>
      <h3 className="intro">SERVICES</h3>
      <div className="services">
        <div className="savings">
          <div className="saving-section">
            We have mobile app for farmers and a dashboard for VSLA. By
            providing a web app and dashboard that integrates with VSLA,
            EconTrust will give farmers complete access to their records,
            savings, loans, and finiacial literacy.An AI-powered credit scoring
            system that identifies credit-worthy VSLAs and provides them with
            input financing services (such as seeds, fertilizer, and
            mechanization) up to three times the worth of their savings
          </div>
          <img
            src="https://www.nj.com/personal-finance/static/53a4e3dff0e918cc1de8f39c5b99adac/48efe/types-of-savings-accounts.jpg"
            className="savings-img"
          />
        </div>
        <div className="loans">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWt1gBr5-xkKt66db-BfKdvcmW2JndVzURFg&s"
            className="loan-img"
          />
          <div className="loan-section">
            Farmers can apply for loans a dashboard for VSLA. By providing a web
            app and dashboard that integrates with VSLA, Econtrust will give
            farmers complete access to their records, savings, loans, and
            finiacial literacy.With their very low costs, informal traditional
            models were discovered to be the best way to achieve this, but could
            benefit from improved governance, standardised procedures and
            simple, transparent financial systems
          </div>
        </div>
        <div className="record-keeping">
          <div className="records-section">
            We have mobile app for farmers and a dashboard for VSLA. By
            providing a web app and dashboard that integrates with VSLA,
            EconTrust will give farmers complete access to their records,
            savings, loans, and finiacial literacy.Your strategy should aim to
            include recordkeeping as part of the overall process and not an
            additional activity.Records of these activities are public records
            that you must capture and manage.
          </div>
          <img
            src="https://pbs.twimg.com/media/EtSfjhqXAAEQdXe.jpg"
            className="records-img"
          />
        </div>
      </div>
    </>
  );
};
export default Services;
