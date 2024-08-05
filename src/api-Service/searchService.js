import * as request from '~/Utilitis/request';
export const Search = async (q, type= 'less')=>{
    try{
        const res = await request.get(`users/search`, {
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