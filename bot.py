import telebot
bot = telebot.TeleBot('1226155970:AAE0dD3_NfWrwog12eYON2ZvmUI6Iz6-ixw');


STICKER_ID ='CAACAgIAAxkBAAJQS16f-lBQblb98JioPZFj27d-riosAAJ4BwAClvoSBdhB5stzgbw-GAQ';

name = '';
surname = '';
age = 0;


@bot.message_handler(content_types=['text'])
def start(message):
  if message.text == '/reg':
    bot.send_message(message.from_user.id, "Как тебя зовут?");
    bot.register_next_step_handler(message, get_name);  # следующий шаг – функция get_name
  else:
    bot.send_message(message.from_user.id, 'Напиши /reg');


def get_name(message):  # получаем фамилию
  global name;
  name = message.text;
  bot.send_message(message.from_user.id, 'Какая у тебя фамилия?');
  bot.register_next_step_handler(message, get_surname);


def get_surname(message):
  global surname
  surname = message.text
  bot.send_message(message.from_user.id, 'Сколько тебе лет?')
  bot.register_next_step_handler(message, get_age)


def get_age(message):
  global age;
  age = message.text
  bot.send_message(message.from_user.id, 'С какого универа ?  ')
  bot.register_next_step_handler(message, get_univer)


def get_univer(message):
  global univer;
  univer = message.text
  bot.send_message(message.from_user.id, 'Факультет и курс (!пропиши через запятую)')
  bot.register_next_step_handler(message, get_fack)


def get_fack(message):
  global faculty;
  faculty = message.text

  bot.send_message(message.from_user.id, 'Тебе ' + str(age) + ' лет, тебя зовут ' + name + ' ' + surname + '?' + 'Ты с ' + univer + ',' + faculty + " " + 'right?')





bot.polling(none_stop=True, interval=0)
