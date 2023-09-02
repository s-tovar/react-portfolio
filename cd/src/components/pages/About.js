import MailToBtn from "../EmailBtn";

export default function About() {
  return (
    <section id="about">
      <div className="p-3 text-white aboutMe">
        <h1>About Me</h1>
        <p>
          Hello! I'm Steven Tovar, a first-generation college graduate with a
          background in education. For years, I found immense joy in
          facilitating learning and empowering young minds. However, my lifelong
          passion for technology and problem-solving led me down an exciting new
          path—Web Development. I decided to take the plunge and enrolled in the
          Fullstack Flex Coding Bootcamp at UCR. The program's
          rigorous curriculum and hands-on approach have provided me with the
          skill set to transition smoothly into the tech industry. While I
          enjoyed every facet of the bootcamp, I found that my strengths truly
          shined in backend logic. The challenge of constructing efficient
          algorithms and databases energizes me, and I thrive in solving complex
          problems that fuel the functionality of a web application. I'm excited
          about this new journey and am open to opportunities where I can apply
          my newly-acquired skills to real-world problems. I believe in the
          transformative power of technology and am eager to contribute to
          projects that make a difference. Feel free to reach out at
          {
            <MailToBtn
              label="s.tovar2936@gmail.com"
              mailto="s.tovar2936@gmail.com"
            />
          }
          if you'd like
          to connect, collaborate, or simply chat about the endless
          possibilities in the world of web development.
        </p>
      </div>
    </section>
  );
}