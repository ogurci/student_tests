from .models import Students, Test
from django. forms import ModelForm, TextInput, DateTimeInput, Textarea


class StudentsForm(ModelForm):
    class Meta:
        model = Students
        fields = ['name1', 'surname', 'patronymic']


class TestForm(ModelForm):
    class Meta:
        model = Test
        fields = ['test_scores', 'emotionalnay_osvedomlennost', 'ypravlenie_svoimi_emotiymi', 'samomotivatiy', 'empatiy', 'raspoznanie_emotiy_drugih_lydey', 'students']