import * as React from 'react';
import * as styles from './styles.pcss';

interface Props {
    num: number
}

export default class Badge extends React.PureComponent<Props> {
    render = (): JSX.Element => {
        const message: string = 'new message';

        return (
            <div className={ styles.badge }>
                <span className={ styles.num }>
                    { this.props.num > 0 ? this.props.num : 'no' }
                </span>
                <span className={ styles.text }>
                    { message }{ this.props.num !== 1 ? 's' : ''}
                </span>
            </div>
        );
    }
}
