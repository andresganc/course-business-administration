
import { nc_ms_cyl_cylinders } from '../models/entity-cylinders'

export const resolversCylinders = {

    Query : {
        getCylinders: () => {
            return nc_ms_cyl_cylinders.find({})
        }
    }

}