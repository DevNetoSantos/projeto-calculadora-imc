import { level } from "../../helpers/imc";
import style from './GridItem.module.css';
import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';

type Props = {
    item: level;
};

export const GridItem = ({item}: Props) => {
    return(
        <div className={style.main} style={{backgroundColor: item.color}}>
            ...
        </div>
    );
}