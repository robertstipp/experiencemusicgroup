import { office, people } from "./contactData";

const Contact = () => {
  const { name, address, phone } = office;
  return (
    <main>
      <h1>Contact</h1>
      <section>
        {name}
        <p>{address}</p>
        <p>{phone}</p>
      </section>
      {people.map((person) => {
        const { id, name, officeNum, mobileNum, email } = person;
        return (
          <section key={id}>
            {name}
            <p>{officeNum}</p>
            <p>{mobileNum}</p>
            <p>{email}</p>
          </section>
        );
      })}
    </main>
  );
};

export default Contact;
