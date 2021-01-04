function solution (p) {
    var answer = '';

    answer = BalToCor(p);

    function BalToCor (w) {
        var Lcount = 0;
        var Rcount = 0;
        if (w === "") return "";
        else {
            //u,v 분리 
            var div = 0;
            var list = [];
            for (var i = 0; i < w.length; i++) {
                if (w[i] === "(") Lcount++;
                else Rcount++;
                if (Lcount === Rcount) {
                    div = i;
                    break;
                }

            }
            //console.log(div);

            var u = w.substring(0, div + 1);
            var v = w.substring(div + 1, p.length);

            if (isCorrect(u)) {
                return u.concat(BalToCor(v));
            } else {
                list.push('(');
                list.push(BalToCor(v));
                list.push(")");
                u = u.substr(1);
                u = u.substr(0, u.length - 1);
                u = reverseP(u);
                list.push(u);
                u = list.join("");
                return u
            }

        }

    }

    function isCorrect (u) {
        var pStack = [];
        for (var i = 0; i < u.length; i++) {
            // if (p[i] === "(") Lcount++;
            // else Rcount++;

            if (pStack.length) {
                if (pStack[pStack.length - 1] === "(" && u[i] === ")") {
                    pStack.pop();
                } else pStack.push(u[i]);
            } else pStack.push(u[i]);


        }
        if (!pStack.length) return true;
        else return false;

    }

    function reverseP (u) {
        var ulist = [];
        for (var i = 0; i < u.length; i++) {
            //console.log(u[i]);
            ulist.push((u[i] === "(") ? ")" : "(");

        }
        return ulist.join("");

    }









    return answer;
}

console.log(solution("(()())()"));

