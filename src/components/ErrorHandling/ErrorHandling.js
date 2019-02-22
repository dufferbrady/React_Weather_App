import React from 'react'

import classes from './ErrorHandling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const errorHandler = props => (
    <div className={ classes.Error }>
        <div className={ classes.Message }>
            <FontAwesomeIcon className={classes.ErrorIcon} icon="frown" />
            <h2>{props.message}</h2>
        </div>
        <details className={ classes.Details }>
            <summary className={ classes.Summary }>
              Details
            </summary>
            {props.error && props.error.toString()}
          <br />
        </details>
    </div>
)

export default errorHandler