from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer
from dotenv import load_dotenv

load_dotenv()


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['GET'], detail=False)
    def whoami(self, request, pk=None):  # noqa
        return JsonResponse(UserSerializer(request.user).data, status=200)


@api_view(['POST'])
def signup(request):
    try:
        # TODO add validation
        user = User()
        user.username = request.data['username']
        user.set_password(request.data['password'])
        user.email = request.data['email']
        user.first_name = request.data['firstName']
        user.last_name = request.data['lastName']
        user.save()
        return JsonResponse(UserSerializer(user).data, status=200)
    except Exception as e:
        print(e)
        return JsonResponse({"error": "error details"}, status=500)

