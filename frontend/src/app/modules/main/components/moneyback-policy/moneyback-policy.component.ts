import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-moneyback-policy',
   templateUrl: './moneyback-policy.component.html',
   styleUrls: ['./moneyback-policy.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneybackPolicyComponent implements OnInit {
   paragraphs: string[] = [
      'Активы - любые электронные валюты, фиатные безналичные и наличные национальные валюты, криптовалюты и токены;',
      'Обменный сервис (Сервис) - программное обеспечение, размещенное в сети Интернет для обмена Активов;',
      'Обмен - перевод Активов между счетами Сервиса и Пользователя;',
      'Пользователь - любое лицо которое воспользовалось услугами Сервиса, отправило Активы на счета Сервиса намеренно для выполнения Обмена или ошибочно;',
      'Заявка - желание клиента произвести обмен Активов, оформленное в электронном виде через пользовательские интерфейсы на сайтах Сервиса;',
      'Таймаут - время, отведенное Пользователю для перечисления Активов на счета Сервиса для выполнения Обмена;',
      'Неучтенные средства - Активы, зачисленные на счета Сервиса без оформления Заявки на сайтах Сервиса или Активы, зачисленные на счета Сервиса сверх сумм, указанных в Заявке;',
      'Возврат - действия Сервиса по переводу Активов или Неучтенных средств со счетов Сервиса на счета Пользователей;',
      'Refund - действия Сервиса по отмене состоявшегося Обмена с целью Возврата.',
   ];

   list: {
      text: string;
      sublist?: { text: string; paragraphs?: string[] }[];
   }[] = [
      {
         text:
            'Разработанная политика описывает действия и бездействия Сервиса по Возврату Активов Пользователям, а также комиссии, которые предусмотрены Сервисом за обработку Возвратов. Данная политика является неотъемлемой частью Правил оказания услуг Сервиса;',
      },
      {
         text:
            'Возврат может быть выполнен только на сумму не превышающую сумму Актива, отправленную Пользователем на счета Сервиса для Обмена;',
      },
      {
         text:
            'Возврат может быть выполнен только на счет Пользователя, указанного в Заявке или с которого Сервис принял Активы, за исключением случаев в п.#7.4 политики;',
      },
      {
         text:
            'Комиссия Сервиса за выполнения Возврата удерживается из суммы возвращаемого пользователю Актива;',
      },
      {
         text: 'Обязанности Сервиса:',
         sublist: [
            {
               text:
                  'Сервис обязуется вернуть Активы, которые были отправлены Пользователем на счета Сервиса только в том случае если Обмен не состоялся. Пользователь не получил Активы от Сервиса на свои счета;',
            },
            {
               text:
                  'Сервис обязуется вернуть Неучтенные средства Пользователю;',
            },
         ],
      },
      {
         text: 'Сервис вправе:',
         sublist: [
            {
               text:
                  'Не возвращать Активы или Неучтенные средства до обращения Пользователя за Возвратом. Любые действия Сервиса по Возврату Активов в соответствие с текущей политикой начинаются после обращения Пользователя в поддержку. Это означает, что без обращения Пользователя Сервис бездействует в отношение Возврата;',
            },
            {
               text:
                  'Не возмещать Пользователю комиссии платежных систем при Возврате;',
            },
            {
               text:
                  'Отказать Пользователю в процедуре Refund за исключением случаев предусмотренных в п.п.#7.3 политики;',
            },
            {
               text:
                  'Взимать комиссию за Возврат Неучтенных средств, указанную в п.#8',
            },
            {
               text:
                  'Взимать комиссию за Возврат, указанную в п.#8 в случае невозможности выполнить Обмен по причинам не зависящим от Сервиса, в частности, когда Сервис не в состоянии завершить Обмен на заблокированный или лимитированный счет Пользователя;',
            },
            {
               text:
                  'Взимать комиссию за Возврат, указанную в п.#8 для Заявок отмененных по Таймауту. Пользователь отправил Активы на счета Сервиса после отмены Заявки и требует Возврата;',
            },
            {
               text:
                  'В соответствие с п.п.#7.2 настоящей политики не выплачивать Пользователю дополнительных комиссий;',
            },
         ],
      },
      {
         text: 'Особые условия:',
         sublist: [
            {
               text:
                  'Сервис хранит Активы Пользователя подлежащие Возврату на безвозмездной основе;',
            },
            {
               text:
                  'Сервис не распоряжается Активами Пользователя подлежащими Возврату в коммерческих интересах, никаким образом не извлекает инвестиционную или любую другую прибыль с таких Активов;',
            },
            {
               text:
                  'Сервис может пойти на уступки и выполнить Refund в случае ошибки Пользователя, а именно, когда Пользователь выполнил Обмен на недоступный ему счет, например на чужой счет;',
               paragraphs: [
                  'Для выполнения Refund Пользователь самостоятельно должен позаботиться о возврате ошибочно перечисленного Актива на счет Сервиса, договорится с владельцем счета или платежной системой о возврате.',
                  'Сервис начинает обрабатывать Возврат пользователя на условиях, описанных в текущей политике и только после получения полной суммы ошибочно перечисленного Актива.',
                  'За Возврат Активов Сервис удерживает комиссию, указанную в п.#8 политики;',
               ],
            },
            {
               text:
                  'Сервис может пойти на уступки и выполнить Возврат на счет Пользователя отличный от указанного в Заявке, если требуется вернуть криптовалютный Актив или токены.',
            },
         ],
      },
      {
         text: 'Комиссии:',
         sublist: [
            {
               text:
                  'За Возвраты предусмотренные политикой Сервис удерживает комиссию в соответствии с тарифом:',
            },
         ],
      },
   ];

   constructor() {}

   ngOnInit(): void {}
}
