import * as React from 'react';
import * as styles from './styles.pcss';

export default function Badge ({ num = 0 }: { num?: number }): JSX.Element {
    const message: string = 'new message';

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
