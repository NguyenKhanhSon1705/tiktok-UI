import * as httprequest from '~/Utilitis/Httprequest';
export const Search = async (q, type= 'less')=>{
    try{
        const res = await httprequest.get(`users/search`, {
            params: {
                q: q,
                type:type
            }
        })
        return res.data

    }catch (error){
        console.log(error)
    }
}