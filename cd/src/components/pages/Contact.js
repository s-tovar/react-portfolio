import MailToBtn from "../EmailBtn";

export default function Contact() {
    return (
      <div className="p-3 text-white">
        <form className="p-3">
          <p>Feel free to reach out!</p>
          <input />
        </form>
        <div className="p-3 text-decoration-none text-white">
          {
            <MailToBtn
              label="Send me an email!"
              mailto="s.tovar2936@gmail.com"
            />
          }
          <div className="p-3">
            <a href="images/resume.pdf" download="resume.pdf" className="btn btn-primary">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    );
  }