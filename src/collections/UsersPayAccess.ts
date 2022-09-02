import _ from "lodash";
import { FieldBase } from "payload/dist/fields/config/types";
import { Field } from "payload/types";
import Posts from "./Posts";

const UsersPayAccess = (): Field[] => {
    return [
        {
            name: Posts.slug, // required
            type: "group", // required
            fields: [{
                name: `pk_${Posts.slug}`,
                type: 'relationship',
                relationTo: Posts.slug,
                hasMany: true,
            },
            ],
        },
    ];
}

const WrapperGroup = (config: FieldBase | any, wrappedFields: Field[], mix: any | Field): Field[] => {
    const defaultObj: Field = {
        name: config.name, // required
        type: "group", // required
        admin: {
            disabled: false,
        },
        fields: [
            ...wrappedFields,
        ],
    };

    const mixed: Field = _.merge(defaultObj, mix);
    return [mixed];
};

export default WrapperGroup({ name: 'users_pay_access' }, UsersPayAccess(), {
    saveToJWT: true,

});
