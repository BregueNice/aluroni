import filtros from './filtros.json';
import styles from '../Cardapio.module.scss';
import classNames from 'classnames';

interface Opcao {
    id: number;
    label: string;
}

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {

    function selecionarFiltro(opcao: Opcao) {
        if (filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filtro === opcao.id
                })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
};