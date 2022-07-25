/*
*
* Este script tem como função pegar o título, a descrição e os links dos materiais do portal da alfacon.
* Criei este script para poder organizar os meus estudos para concurso público.
*
* @author Anderson Souza
* Classes usadas no portal da alfacon para separação do conteúdo das aulas
* .title
* .desc
* .all-content_lesson_material
* .all-content_lesson_question
* .all-content_lesson_student_notebook
* .all-content_lesson_examination
*
*/

function alfacon(idContainer){
    this.navDiscipline = idContainer;
    this.fetchAll = function(){
        let conteudo = document.querySelectorAll(`${this.navDiscipline}`) ? document.querySelectorAll(`${this.navDiscipline}`):""; 
        return conteudo;
    }

    this.createObjectCourse = function(classAula, classDesc, classMaterial, classExercicios, classMinissimulado, classCaderno){
        let objCurso = Array.from(conteudo).map(i=>{
            let aula = i.querySelector(`${classAula}`) ? i.querySelector(`${classAula}`).textContent:"Sem aula";
            let desc = i.querySelector(`${classDesc}`) ? i.querySelector(`${classDesc}`).textContent:"Sem descrição";
            let material = i.querySelector(`${classMaterial}`) ? i.querySelector(`${classMaterial}`).href:"Sem aula";
            let exercicios = i.querySelector(`${classExercicios}`) ? i.querySelector(`${classExercicios}`).href:"Sem aula";
            let minissimulado = i.querySelector(`${classMinissimulado}`) ? i.querySelector(`${classMinissimulado}`).href:"Sem aula";
            let caderno = i.querySelector(`${classCaderno}`) ? i.querySelector(`${classCaderno}`).href:"Sem aula";
            return {
                aula,
                desc,
                material,
                exercicios,
                minissimulado,
                caderno
            }
        })
        return this.objCurso = objCurso;
    }
    this.render = function(){
        return this.objCurso.forEach(i=>{
            console.log(i.aula);
            console.log(i.desc);
            console.log(i.material);
            console.log(i.exercicios);
            console.log(i.minissimulado);
            console.log(i.caderno);
        })
    }
}
let material = new alfacon("#nav_discipline_30720_lessons .progress-populator .nav-lesson-list-item");
material.fetchAll()
material.createObjectCourse(".title",".desc", ".all-content_lesson_material",".all-content_lesson_question",".all-content_lesson_examination",".all-content_lesson_student_notebook")
material.render();
