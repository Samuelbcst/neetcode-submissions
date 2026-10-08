class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length){
            return false;
        }

        const frequencia : Map<string, number> = new Map<string, number>();

        for (let i : number = 0; i < s.length; i++){

            const quantidadeAtuals : number = frequencia.get(s[i]) ?? 0;
            frequencia.set(s[i], quantidadeAtuals + 1);
            
            const quantidadeAtualt : number = frequencia.get(t[i]) ?? 0;
            frequencia.set(t[i], quantidadeAtualt - 1);

            if((frequencia.get(s[i]) ?? 0) === 0){
                frequencia.delete(s[i]);
            }

            if((frequencia.get(t[i]) ?? 0) === 0){
                frequencia.delete(t[i]);
            }
        }

        return frequencia.size === 0;
    }
}
