

class Board {
    constructor(){
        this.rows = 6,
        this.columns = 7,
        this.spaces = this.createSpaces();
    }


    /** 
    * Generates 2D array of spaces. 
    * @return  {Array}     An array of space objects
    */

    createSpaces(){
        let spaces = [];

        for (let c = 0; c < this.columns ; c++) {
            const column = [];

            for (let r = 0; r < this.rows; r++) {
                const space = new Space(r, c);
                column.push(space);
                
            }

            spaces.push(column);

        }
 
        return spaces
    }



}
    