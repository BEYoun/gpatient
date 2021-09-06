import { useGetCitiesQuery } from "../../../../../graphql/generated/graphql";
import MultiSelectInputOption from "../../../../common/MultiSelectInputOption";

const CitiesMultiSelect = () => {
    const { data: cities, loading, error } = useGetCitiesQuery();
    if (loading)
        return <div>loadign</div>
    if (error || cities == undefined)
        return <div>err</div>
    return (
        <MultiSelectInputOption values={cities?.getCities ?? cities?.getCities} />
    )
}

export default CitiesMultiSelect;