import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  const cartas = characters.map((e) => (
    <div>
      <Card
        id={e.id}
        name={e.name}
        species={e.species}
        gender={e.gender}
        image={e.image}
        onClose={props.onClose}
        key={e.id}
      />
    </div>
  ));

  return <div className={styles.cartas}>{cartas}</div>;
}
