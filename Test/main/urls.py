from django.urls import path
from . import views

urlpatterns = [
    path('', views.start_window, name='start_window'),
    path('registr', views.fio, name='fio'),
    path('manual_test', views.manual_test, name='manual_test'),
    path('test', views.test, name='test'),
    path('manual_filvord', views.manual_filvord, name='manual_filvord'),
    path('filvord', views.filvord, name='filvord'),
    path('end_window', views.end_window, name='end_window')
]