import * as AuthActionCreators from './auth'
import * as TodosActionCreators from './todos'

const actionCreators = {
    ...AuthActionCreators,
    ...TodosActionCreators
}

export default actionCreators