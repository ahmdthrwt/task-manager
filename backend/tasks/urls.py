from django.urls import path
from .views import TaskListCreate, TaskUpdate, TaskDelete

urlpatterns = [
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskUpdate.as_view(), name='task-update'),
    path('tasks/<int:pk>/delete/', TaskDelete.as_view(), name='task-delete'),
]
