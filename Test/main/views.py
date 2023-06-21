from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import StudentsForm, TestForm
from .models import Test, Filvord


def start_window(request):
    return render(request, 'main/start_window.html')


def fio(request):
    error = ''
    if request.method == 'POST':
        form = StudentsForm(request.POST)
        if form.is_valid():
            a = form.save()
            request.session['a'] = a.id
            return redirect('manual_test')
        else:
            error = 'Форма не верно заполнена'
    form = StudentsForm()
    data = {
        'form': form,
        'error': error
    }

    return render(request, 'main/fio.html', data)


def manual_test(request):
    return render(request, 'main/manual_test.html')


def test(request):
    value = request.session['a']
    data = {
        'a': value
    }
    if request.method == "GET":
        url = request.GET.get('q1')
        url2 = request.GET.get('q2')
        url3 = request.GET.get('q3')
        url4 = request.GET.get('q4')
        url5 = request.GET.get('q5')
        url6 = request.GET.get('q6')
        url7 = request.GET.get('q7')
        url8 = request.GET.get('q8')
        url9 = request.GET.get('q9')
        url10 = request.GET.get('q10')
        url11 = request.GET.get('q11')
        url12 = request.GET.get('q12')
        url13 = request.GET.get('q13')
        url14 = request.GET.get('q14')
        url15 = request.GET.get('q15')
        url16 = request.GET.get('q16')
        url17 = request.GET.get('q17')
        url18 = request.GET.get('q18')
        url19 = request.GET.get('q19')
        url20 = request.GET.get('q20')
        url21 = request.GET.get('q21')
        url22 = request.GET.get('q22')
        url23 = request.GET.get('q23')
        url24 = request.GET.get('q24')
        url25 = request.GET.get('q25')
        url26 = request.GET.get('q26')
        url27 = request.GET.get('q27')
        url28 = request.GET.get('q28')
        url29 = request.GET.get('q29')
        url30 = request.GET.get('q30')
        if url != None and url2 != None and url3 != None and url4 != None and url5 != None and url6 != None and url7 != None and url8 != None and url9 != None and url10 != None and url11 != None and url12 != None and url13 != None and url14 != None and url15 != None and url16 != None and url17 != None and url18 != None and url19 != None and url20 != None and url21 != None and url22 != None and url23 != None and url24 != None and url25 != None and url26 != None and url27 != None and url28 != None and url29 != None and url30 != None:
            url = int(request.GET.get('q1'))
            url2 = int(request.GET.get('q2'))
            url3 = int(request.GET.get('q3'))
            url4 = int(request.GET.get('q4'))
            url5 = int(request.GET.get('q5'))
            url6 = int(request.GET.get('q6'))
            url7 = int(request.GET.get('q7'))
            url8 = int(request.GET.get('q8'))
            url9 = int(request.GET.get('q9'))
            url10 = int(request.GET.get('q10'))
            url11 = int(request.GET.get('q11'))
            url12 = int(request.GET.get('q12'))
            url13 = int(request.GET.get('q13'))
            url14 = int(request.GET.get('q14'))
            url15 = int(request.GET.get('q15'))
            url16 = int(request.GET.get('q16'))
            url17 = int(request.GET.get('q17'))
            url18 = int(request.GET.get('q18'))
            url19 = int(request.GET.get('q19'))
            url20 = int(request.GET.get('q20'))
            url21 = int(request.GET.get('q21'))
            url22 = int(request.GET.get('q22'))
            url23 = int(request.GET.get('q23'))
            url24 = int(request.GET.get('q24'))
            url25 = int(request.GET.get('q25'))
            url26 = int(request.GET.get('q26'))
            url27 = int(request.GET.get('q27'))
            url28 = int(request.GET.get('q28'))
            url29 = int(request.GET.get('q29'))
            url30 = int(request.GET.get('q30'))
            total = url + url2 + url3 + url4 + url5 + url6 + url7 + url8 + url9 + url10 + url11 + url12 + url13 + url14 + url15 + url16 + url17 + url18 + url19 + url20 + url21 + url22 + url23 + url24 + url25 + url26 + url27 + url28 + url29 + url30
            emotionalnay_osvedomlennost = url + url2 + url4 + url17 + url19 + url25
            ypravlenie_svoimi_emotiymi = url3 + url7 + url8 + url10 + url18 + url30
            samomotivatiy = url5 + url6 + url13 + url14 + url16 + url22
            empatiy = url9 + url11 + url20 + url21 + url23 + url28
            raspoznanie_emotiy_drugih_lydey = url12 + url15 + url24 + url26 + url27 + url29
            students = value
            a = Test(test_scores=total, emotionalnay_osvedomlennost=emotionalnay_osvedomlennost,
                     ypravlenie_svoimi_emotiymi=ypravlenie_svoimi_emotiymi, samomotivatiy=samomotivatiy,
                     empatiy=empatiy, raspoznanie_emotiy_drugih_lydey=raspoznanie_emotiy_drugih_lydey,
                     students_id=students)
            a.save()
            return redirect('manual_filvord')
    return render(request, 'main/test.html', data)


def manual_filvord(request):
    return render(request, 'main/manual_filvord.html')


def filvord(request):

    value = request.session['a']
    data = {
        'a': value
    }
    if request.method == "GET":
        url = request.GET.get('url')
        if url != None:
            a = url
            request.session['b'] = a
    return render(request, 'main/filvord.html')


def end_window(request):
    value = request.session['b']
    value1 = request.session['a']
    fil = Filvord(score_filvord=value, students_id=value1)
    fil.save()
    return render(request, 'main/end_window.html')