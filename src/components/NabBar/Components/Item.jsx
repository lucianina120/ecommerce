import "./Item.css";

export default function Item({ name }) {
    return (
        <li className="item">
            <a className="item-link " href={name}>{name}</a>
        </li>
    );
}
