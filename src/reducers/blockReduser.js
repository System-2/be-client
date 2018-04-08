export let blockReducer = (state={isFetching : false, Array : []},action) => {
    switch(action.type){
        case 'StartFetch':
            return {
                isFetching : true
            }
            break;

        case 'endFetch':
            return{
                isFetching : false,
                Array : action.Array
            }
            break;
        default:
            return state;
    }
}