import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { TDifferentPriceItem } from '../../../constants/price';
import { ButtonStyle } from '../../../style/styledButton';

import styles from './DifferentPriceList.module.sass';

interface DifferentPriceListProps {
    handleActionClick: () => void;
    priceList: TDifferentPriceItem[];
}

const DifferentPriceList: FC<DifferentPriceListProps> = ({priceList, handleActionClick}) => {
    const priceItems = priceList.map(({title, value, discount}) => (
        <div className={styles.PriceItem} key={title}>
            <div className={styles.Price}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Divider} />
                <div className={styles.Value}>
                    {discount ? (
                        <>
                            <span className={styles.DiscountOld}>{value}</span> <span
                            className={styles.DiscountNew}>{discount}</span>
                        </>
                    ) : `${value} руб./сутки`
                    }
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.PriceList}>
            <div className={styles.PriceTable}>
                {priceItems}
            </div>
            <div className={styles.PriceItem}>
                <Button variant="contained" onClick={handleActionClick} sx={ButtonStyle} className={styles.Action}>Узнать
                    о наличии</Button>
            </div>
        </div>
    );
};

export default DifferentPriceList;
