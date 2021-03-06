import { Dimension, world } from 'mojang-minecraft';

/** 
 * @param {String} command Command. 
 * @param {Dimension} dimension Dimension. Dimensions: overworld | nether | the end
 * @param {Boolean} noError If it returns an error if one occurs or not.
 * @returns {String} Returns an array.
*/
function runCMD(command,dimension,noError) {
    try {
        return { error: false, ...world.getDimension(dimension ?? "overworld").runCommand(command) };
    } catch(e) {
        if (!noError) console.warn(`The following command failed to run: ${command}`);
        return { error: e, result: null };
    }
}

/** 
 * @param {Array<String>} commandArray Commands.
 * @param {Dimension} dimension The dimension command should be run in. If left blank it will run in the: overworld. 
 * @returns {Array<String>} Returns an array for each object in the array.
 */
function runCMDS(commandArray,dimension) {
    for (let i=0; i<commandArray.length;++i) {
        runCMD(commandArray[i],dimension);
    }
}

/** 
 * @param {String} username Player Name.
 * @param {String} tag Tag.
 * @return {Boolean}
 */
 function getTag(username,tag) {
    let tags = runCMD(`tag "${username}" list`).statusMessage;
    let tagFound = tags.match(`${tag}`);

    if (tagFound) return true;
    return false;
};

/** 
 * @return {Array<String>} Returns an Array with player names.
 */
 function getNames() {
    let playernames = [...world.getPlayers()];
    playernames = playernames.map(t=>t.nameTag);
    return playernames;
};

/** 
 * @param {String} username Player Name.
 * @param {String} scoreboard Scoreboard.
 * @return {Number} Returns scoreboard value.
 */
function getScore(username,scoreboard) {
    const result = runCMD(`scoreboard players test "${username}" "${scoreboard}" * *`,"overworld",true);
    const score = result.error ? 0:parseInt(result.statusMessage.match(/(?<=Score).+(?=is)/g));
    
    return score;
}

/** 
 * @param {String} name Player Name.
 * @return {String|Boolean} Returns Player Name else false.
 */
 function smartSearchName(name) {
    if (typeof name !== 'string') throw Error("Name arguement value isn't a string.")
    const names = getNames();
    const regexPattern = new RegExp('([a-zA-Z0-9]+)?'+name.toLowerCase()+'([a-zA-Z0-9]+)?','g');
    const newName = names.filter((n,i)=>{
        if (n.toLowerCase().match(regexPattern)) return names[i];
    });
    const nameReturn = newName[0] === undefined ? false:newName[0]; 
    return nameReturn;
}

export { runCMD, runCMDS, getTag, getNames, getScore, smartSearchName }
