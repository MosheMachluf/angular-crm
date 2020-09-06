import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      id: '1',
      name: 'Leah Hernandez',
      email: 'leahhernandez@webiotic.com',
      birthday: new Date('2017-11-30T06:10:57-02:00'),
      phones: ['+1 (891) 483-2126', '+1 (964) 501-2377', '+1 (936) 559-3461'],
    },
    {
      id: '2',
      name: 'Lambert Deleon',
      email: 'lambertdeleon@webiotic.com',
      birthday: new Date('2017-02-28T02:45:13-02:00'),
    },
    {
      id: '3',
      name: 'Letha Carver',
      email: 'lethacarver@webiotic.com',
      birthday: new Date('2014-06-19T06:51:15-03:00'),
      phones: ['+1 (860) 590-3774', '+1 (972) 510-2972'],
    },
    {
      id: '4',
      name: 'Taylor Cain',
      email: 'taylorcain@webiotic.com',
      birthday: new Date('2020-01-19T08:49:26-02:00'),
      phones: ['+1 (908) 446-2047'],
    },
    {
      id: '5',
      name: 'Powell Mcgee',
      email: 'powellmcgee@webiotic.com',
      birthday: new Date('2018-01-03T11:20:14-02:00'),
      phones: [],
    },
    {
      id: '6',
      name: 'Maryellen Macias',
      email: 'maryellenmacias@webiotic.com',
      birthday: new Date('2017-05-27T11:02:10-03:00'),
      phones: ['+1 (817) 500-2412'],
    },
    {
      id: '7',
      name: 'Stanley Duffy',
      email: 'stanleyduffy@webiotic.com',
      birthday: new Date('2015-04-05T08:39:48-03:00'),
      phones: ['+1 (858) 575-2842', '+1 (978) 592-2359', '+1 (812) 555-3312'],
    },
    {
      id: '8',
      name: 'Holt Golden',
      email: 'holtgolden@webiotic.com',
      birthday: new Date('2015-09-30T08:10:54-03:00'),
      phones: [],
    },
    {
      id: '9',
      name: 'Hicks Lindsey',
      email: 'hickslindsey@webiotic.com',
      birthday: new Date('2018-05-28T12:55:25-03:00'),
      phones: ['+1 (903) 559-2098', '+1 (868) 540-3480', '+1 (876) 543-3694'],
    },
    {
      id: '10',
      name: 'Hester Bray',
      email: 'hesterbray@webiotic.com',
      birthday: new Date('2014-03-24T09:59:31-02:00'),
      phones: ['+1 (951) 512-3316', '+1 (887) 547-2750'],
    },
    {
      id: '11',
      name: 'Letha Carver',
      email: 'lethacarver@webiotic.com',
      birthday: new Date('2014-06-19T06:51:15-03:00'),
      phones: ['+1 (860) 590-3774', '+1 (972) 510-2972'],
    },
    {
      id: '12',
      name: 'Taylor Cain',
      email: 'taylorcain@webiotic.com',
      birthday: new Date('2020-01-19T08:49:26-02:00'),
      phones: ['+1 (908) 446-2047'],
    },
    {
      id: '13',
      name: 'Powell Mcgee',
      email: 'powellmcgee@webiotic.com',
      birthday: new Date('2018-01-03T11:20:14-02:00'),
      phones: [],
    },
    {
      id: '14',
      name: 'Maryellen Macias',
      email: 'maryellenmacias@webiotic.com',
      birthday: new Date('2017-05-27T11:02:10-03:00'),
      phones: ['+1 (817) 500-2412'],
    },
    {
      id: '15',
      name: 'Stanley Duffy',
      email: 'stanleyduffy@webiotic.com',
      birthday: new Date('2015-04-05T08:39:48-03:00'),
      phones: ['+1 (858) 575-2842', '+1 (978) 592-2359', '+1 (812) 555-3312'],
    },
  ];

  getAll(): Contact[] {
    return this._contacts;
  }

  countContacts(): number {
    return this._contacts.length;
  }
}
