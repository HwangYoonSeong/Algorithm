function solution (skill, skill_trees) {
    var answer = 0;

    var rmChar = [];//제거해야될 스킬 배열 

    var result = []; //skill 순서 
    for (var i = 1; i < skill.length + 1; i++) {
        result.push(skill.substr(0, i));
    }

    console.log(result);

    for (var i = 0; i < skill_trees.length; i++) {

        rmChar = [];
        for (var j = 0; j < skill_trees[i].length; j++) {
            if (skill.indexOf(skill_trees[i][j]) == -1) {
                //skill_trees[i] = skill_trees[i].replace('/' + skill_trees[i][j] + '/gi', '');
                rmChar.push(skill_trees[i][j]);
            }
            // process.stdout.write(skill_trees[i][j]);
        }

        for (var k = 0; k < rmChar.length; k++) { //스킬배열에 포함되지 않은 스킬제거 
            const regex = new RegExp(`${rmChar[k]}`);
            skill_trees[i] = skill_trees[i].replace(regex, '');

        }
        //console.log(skill_trees[i]);

        if (skill_trees[i] == "") {
            answer++;
        }

        for (var m = 0; m < result.length; m++) { //스킬트리 체크

            if (skill_trees[i] == result[m]) {
                answer++;
            }

        }

    }
    return answer;
}

skill = "ABC";
skill_trees = ["OPQ", "OPQ"];

//skill_trees[0] = skill_trees[0].replace(regex, '');

//console.log(skill_trees[0]);
console.log(solution(skill, skill_trees));