import React from 'react';
import styles from './badge-functional.pcss';

export default function BadgeFunctional ({ num = 0 }) {
    const message = 'new message';

    return (
        <div className={ styles.badge }>
            <span className={ styles.num }>
                { num > 0 ? num : 'no' }
            </span>
            <span className={ styles.text }>
                { message }{ num !== 1 ? 's' : ''}
            </span>
        </div>
    );
}
