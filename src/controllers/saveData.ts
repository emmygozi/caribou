import { Response, NextFunction } from 'express';
import { createClient } from 'redis';
import RequestWithBody from '../interfaces/saveData';
import { get, controller } from '../routes/';
import inMemoryDB from '../helpers/inMemoryDB';

// const REDIS_PORT: number | string = process.env.REDIS_PORT || 6379;
const REDIS_PORT = 6379;
const client = createClient(REDIS_PORT);

// type InMemoryDb = {
//     [k: string]: string
// }

// const inMemoryDb: InMemoryDb = ??? // <<<


@controller('')
class SaveDataController {

    // GET /get?key=<some_dynamic_key_name>


    @get('/get')
    getKey(req: RequestWithBody, res: Response, next: NextFunction): void {
        try {
                const [ [ key, value ] ] = Object.entries(req.query)
                const data = inMemoryDB.mapInstance().get(key);

                console.log(data, 'This os my data')
               
                if (data === undefined) {
                    res.status(422).json({
                        message: 'invalid request'
                    }); 
                } else {
                    res.status(200).json({
                        data, 
                        message: 'Key retrieved successfully'
                    });
                }
            // res.send(`
            // <div>
            // <h1>Hi there</h1>
            // </div>
            // `);
        } catch (error) {
            next(error)
        }    
    }

    // GET /set?<SOME_KEY>=<SOME_VALUE>
    //
    //    request will only have 1 key:value pair
    //    no need to check whether there are additional kv pairs
    @get('/set')
    setKey(req: RequestWithBody, res: Response, next: NextFunction): void{
        try {
            // type InMemoryDb = {
            //     [key: string]: string
            // };
               
                const [ [ key, value ] ] = Object.entries(req.query)

                // Object.???? 
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

                // Object.keys
                // Object.values


                if (key !== undefined && typeof value === 'string') {
                    inMemoryDB.mapInstance().set(key, value);

                    console.log(inMemoryDB.mapInstance().get(key));

                    res.status(200).json({
                        message: `${key} set successfully`
                    });
                } else {
                    res.status(400).json({
                        message: 'key not set'
                    });
                }
        } catch (error) {
            next(error)
        }    
    }
        
}
