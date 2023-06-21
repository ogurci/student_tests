from django.db import models

class Students(models.Model):
    name1 = models.CharField('Имя', max_length=50)
    surname = models.CharField('Фамилия', max_length=50)
    patronymic = models.CharField('Отчество', max_length=50)

    def __str__(self):
        return self.name1

    class Meta:
        verbose_name = 'Студент'
        verbose_name_plural = 'Студенты'

class Test(models.Model):
    students = models.ForeignKey('Students', on_delete=models.PROTECT, null=True)
    test_scores = models.IntegerField('Баллы за тест')
    emotionalnay_osvedomlennost = models.IntegerField('Эмоциональная осведомленность')
    ypravlenie_svoimi_emotiymi = models.IntegerField('Управление своими эмоциями')
    samomotivatiy = models.IntegerField('Самомотивация')
    empatiy = models.IntegerField('Эмпатия')
    raspoznanie_emotiy_drugih_lydey = models.IntegerField('Распознание эмоций других людей')


    class Meta:
        verbose_name = 'Тест'
        verbose_name_plural = 'Тест'


class Filvord(models.Model):
    students = models.ForeignKey('Students', on_delete=models.PROTECT, null=True)
    score_filvord = models.IntegerField('Баллы за филворд')

    class Meta:
        verbose_name = 'Филворд'
        verbose_name_plural = 'Филворд'