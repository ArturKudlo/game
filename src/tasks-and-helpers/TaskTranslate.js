import $ from 'jquery';
import randomWord from './dictionary';

export default class TaskTranslate {
  constructor() {
    this.task = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return this.task.trans.some(el => answ === el);
  }

  showTask() {
    const html = `
        <h4 class="task border"> ${this.task.word}</h4>
        <input type="text" name="answer" id="taskAnsw" placeholder="Введи свой ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Переведи на русский язык');
  }
}
