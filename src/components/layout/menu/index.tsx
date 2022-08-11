import Link from "next/link";
import { Url } from "url";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight  section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Minhas</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/" label="Cadastro" />
        <MenuItem href="/" label="Configuracoes" />
      </ul>
    </aside>
  );
};

interface MenuItemProps {
  href: Url;
  label: String;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
      <Link href={props.href}>
        <a>
          <span className="icon"></span> {props.label}
        </a>
      </Link>
    </li>
  );
};
