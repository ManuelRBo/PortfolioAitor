%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO%
%                                                                         %
%                          MECÁNICA CLÁSICA                               %
%                      Laboratorio de Simulación                          %
%                   Impacto Sobre un Sólido Articulado                    %
%                                                                         %
%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% El sistema a estudiar consta de un bloque ortoédrico homogéneo de masa M
% y dimensiones a, b, c a lo largo de las direcciones x, y, z (cuerpo 1),
% y de una pelota de masa m (cuerpo 2). El sistema está sometido al
% campo gravitario terrestre, y el bloque cuelga de una rótula O situada en
% el centro de una de las caras de dimensiones a, b (plano paralelo a xy).
%
% La rótula O permite al ortoedro girar en cualquier dirección y no tiene
% rozamiento (ligadura ideal). Dicha rótula se toma además como el
% origen del sistema de coordenadas inercial que usa el simulador (ejes 0).
% Hay otro sistema ligado al sólido (ejes 1), con origen en la rótula.
% De este modo, las coordenadas del centro geométrico G en ejes cuerpo
% serán (0,0,-c/2), y las de la rótula (0,0,0). El programa de simulación
% da algunas magnitudes (velocidad angular) en ejes cuerpo, y otras
% (posiciones y velocidades de puntos) en ejes fijos.
%
% En t=0 s el bloque cuelga inmóvil (de manera que los ejes de ambos sistemas
% de referencia son paralelos) y la pelota se lanza sobre el mismo
% partiendo del punto de cordenadas (x0, y0, z0) con velocidad vx0
% en el sentido negativo de las x. El choque es perfectamente elástico,
% con coeficiente de restitución 1 y coeficiente de rozamiento 0.
%
% autor: Juan Luis Gonzalo
% Modificado por Manuel Ruiz, 2017 y 2018


%%
%**************************************************************************
%          PARÁMETROS DEL PROBLEMA Y CONDICIONES INICIALES                *
%**************************************************************************

% Se selecciona el formato largo (15 cifras decimales) para representar los
% resultados numéricos en pantalla
format 'long'


% Aceleración de la gravedad
g = 9.81; % [m/s^2];


% Parámetros y condiciones iniciales del bloque.
% Iguales para todos los grupos.
% Masa del bloque
M = 30; % [kg]
% Dimensiones del bloque
a = 0.1; %[m]
b = 0.4; %[m]
c = 0.8; %[m]
% Inicialmente se encuentra en reposo suspendido de la rótula


% Parámetros y condiciones iniciales de la esfera.
% Masa de la esfera
m = 2; %[kg]
% Radio de la esfera
r = 0.03; %[m]
% Velocidades según los ejes Oy y Oz (iguales para todos los grupos):
vy0 = 0; % [m/s]
vz0 = 0; % [m/s]
% Posición inicial según el eje 0x (igual para todos los grupos):
x0  = 0.4; % [m]

% Las condiciones iniciales particulares de cada grupo se asignan según
% los números de expediente de los miembros.
% Dichos números de expediente pueden introducirse por filas en el
% siguiente vector columna.
num_exp =   [   170229
                190499
                190235
            ];

% Se aplica el algoritmo dado en los guiones para obtener las condiciones
% iniciales específicas de cada grupo:
% vx, y0, z0.
sum_exp = sum(num_exp);
i1 = mod(sum_exp,10);               % unidades
i2 = mod(fix(sum_exp/10),10);       % decenas
i3 = mod(fix(sum_exp/100),10);      % centenas

%%%% Las siguientes definiciones reproducen la tabla dada en los guiones.
% 2020-21 Se quita la tabla de los guiones
% Se añaden como variables M y b
% Velocidad según el eje Ox:
vx0 = -7 - i1*2; % [m/s]
% Posición según el eje Oy
if i2<5
    y0 = - 0.15 + i2*0.03; % [m]
else
    y0 = 0.03 + (i2-5)*0.03; % [m]
end
% posición según el eje Oz
z0 = -0.3 - i3*0.03; % [m]

% Masa del bloque
M = 25 + i3 ; % [kg]

% Ancho del bloque
b = .24 + i2*.04; % [m]

% queremos que registre al menos cuatro puntos antes del impacto
tI = (r + 0.5 * a - x0) /vx0;  % Calcular el tiempo de impacto
Dt = floor( tI / 3.5 * 10000 ) / 10000 ;
% paso de integración de cada grupo


% Se muestran los valores obtenidos por pantalla
fprintf('Bloque:\nMasa = %12.9f\na = %12.9f\nb = %12.9f\nc = %12.9f\nEsfera:\nMasa = %12.9f\nRadio = %12.9f\nr0 = [ %12.9f, %12.9f, %12.9f]\nvx0 = %12.9f\ndt = %12.9f\n',...
    M, a, b, c, m, r, x0, y0, z0, vx0, Dt );




%%
%**************************************************************************
%                               SIMULACIÓN                                *
%**************************************************************************
%
% Introducir los valores anteriores en la GUI del simulador y ejecutarla.
% Una vez finalizada, exportar el fichero de datos con los valores
% obtenidos.
%SIM_Impacto;


%%
%*************************************************************************
%                            CARGA DE DATOS                              *
%*************************************************************************

% Se cargan los datos generados por el código de simulación.

filename = 'Impacto.txt';   % Nombre del fichero a cargar
% change delimiter to make importing data easier
delimiter = ';';            % Símbolo empleado como separador de valores
headerlines = 3;            % Número de líneas de cabecera

% Matlab puede importar datos numéricos desde ficheros de texto empleando
% la función 'importdata', o desde la interfaz gráfica (click derecho en
% el archivo -> Import Data... ).
datastruct = importdata(filename, delimiter, headerlines );


 % Se separan los datos importados en 5 matrices, correspondientes al
 % tiempo de simulación, la posición y velocidad de la esfera, y los
 % ángulos de Euler y velocidad angular del bloque.
 % Cada fila representa un instante de tiempo.
 % El operador '.' sirve para referise a campos de estructuras (variables
 % que contienen otras variables). La información recuperada por 'importdata'
 % está en un campo llamado 'data' y que corresponde a una matriz.
 % El operador ':' se emplea para definir rangos de valores (si no se
 % indica el valor inicial/final Matlab asume que es el primer/último
 % índice del array).
 % Vector de tiempos, primera columna de datastruct
t  = datastruct.data(:,1);
 % Matriz posición esfera, columnas 2 a 4 de datastruct
rs = datastruct.data(:,2:4);

 % Matriz velocidad esfera, cols. 5 a 7
vs = datastruct.data(:,5:7);

 % Matriz angulos Euler, cols 8 a 19
Euler = datastruct.data(:,8:10);

 % Matriz componentes vel. angular bloque, tres últimas columnas.
omega = datastruct.data(:,11:13);


% Se verifica que las condiciones iniciales corresponden a las calculadas
% anteriormente
tol = 1e-4;
if ( norm(rs(1,:)-[x0,y0,z0],2)>tol || norm(vs(1,:)-[vx0,vy0,vz0],2)>tol ||...
        norm(Euler(1,:),2)>tol || norm(omega(1,:),2)>tol )
    error('Las condiciones iniciales no coinciden')
else
    fprintf('INFO: Cond. iniciales correctas\nDatos cargados en memoria\n')
end


%%
%*************************************************************************
%                        MOVIMIENTO DE LA ESFERA                         *
%*************************************************************************
% IMPACTO: Detecta la posición del choque en el fichero de datos
for i=1:length(t)
    if ( vs(i,1)*vs(i+1,1)<0 ) % En el choque Vx cambia de signo
        kimpacto = i;
        fprintf('El impacto tiene lugar entre los instantes %d y %d.\n', i, i+1 );
        break
    end
end

figure      % creamos una figura donde ir pintando gráficos
% representamos la trayectoria con círculos
% solo desde el primer valor a dos veces el impacto
plot( rs(1:kimpacto*2,1), rs(1:kimpacto*2,3), 'o');
hold on     % no pintar nada aún, que faltan cosas
% representamos la trayectoria calculada hasta el impacto
% como función paramétrica
tt = linspace(0,tI,10) ;    % 10 valores de t
xx = x0 + vx0 * tt ;        % la x del tiro libre
zz = z0 -g*tt.*tt./2 ;      % la z del tiro libre
plot(xx, zz, 'r');          % curva paramétrica, color rojo
hold off    % ya puedes pintar el gŕafico
grid on;
legend('Simulado' , 'Calculado');
xlabel('distancia al eje X [m]');
ylabel('distancia al eje Z [m]');
title('Trayectoria de la esfera');


%Detalle hodógrafa esfera
figure    % otra figura
plot ( vs(1:kimpacto*2,1), vs(1:kimpacto*2,3), 'b')
hold on
plot( vs(1:kimpacto*2,1), vs(1:kimpacto*2,3), 'ob' );
% pintar vz frente a vx, con circulos (o) y línea azul (b)
hold off
grid on;
legend('Hodógrafa esfera');
xlabel('componente velocidad x [m/s]');   ylabel('componente velocidad z [m/s]');
title('Hodógrafa esfera');

%%
%*************************************************************************
%                            MOV DEL SÓLIDO TRAS EL CHOQUE               *
%*************************************************************************

% Extrapolamos la velocidad angular al momento tI
for i=1:3
wd(i) = omega(kimpacto+1,i)+ (( omega(kimpacto+2,i)-omega(kimpacto+1,i) ) /   ...
       ( t(kimpacto+2)-t(kimpacto+1) )) * (tI-t(kimpacto+1));
end
disp(wd);%TABLA1
%
% Calculamos la velocidad angular en tI
menosP = m .* (vs(kimpacto+1,:)-vs(kimpacto,:));
% El punto del bloque que recibe el impacto
rQ = [ x0+vx0*tI-r  y0  z0-g*tI^2/2 ];
% rQ[1] tiene que ser, naturalmente, a/2, pero así lo comprobamos
% La velocidad del centro de masas
vGd = cross( wd, [0 0 -c/2 ]);
% Y la velocidad del punto del choque inmediatamente después
vQd = cross ( wd, rQ);

% Cálculo del tensor de inercia

% El tensor de inercia respecto a la rótula se calculará en ejes cuerpo,
% siendo por tanto constante. Para obtenerlo, se calcula primero el tensor
% de inercia respecto al centro de masas G del bloque y a continuación se
% aplica el teorema de Steiner.

% Tensor de inercia respecto al centro de masas:
IG = [  (M/12)*(b^2+c^2)    0                   0
        0                   (M/12)*(a^2+c^2)    0
        0                   0                   (M/12)*(a^2+b^2)  ];

% Parte esférica en el teorema de Steiner
% eye es la unidad; eye(3) la matriz unidad 3x3
esf = (-c/2)^2*eye(3);

% Producto diádico del vector OG. Recordamos que Matlab realiza el producto
% en el sentido algebraico (en este caso, una matrix de 3x1 multiplicada
% por otra de 1x3). Nótese la diferencia comas (filas), punto y coma (cols)
diad = [ 0; 0; -c/2 ]*[0, 0, -c/2 ];

% Tensor de inercia respecto al punto 0:
IO = IG + M*(esf-diad);
% Si se desea imprimir, se puede hacer como la matriz de giro abajo

% Momento cinético inmediatamente después del choque
HOd = wd * IO ; % orden distinto que abajo, wd es matriz fila

% Con el producto vectorial no se puede obtener el vector P, pues
% se pierde una dimensión. Suponemos P= [Px 0 0 ] y comprobamos
% el error:

Px1 = HOd(2) / rQ(3);

Px2 = - HOd(3) / rQ(2);

% Deberían ser iguales, y coincidir con - la reacción. error?
% En - P estamos metiendo el Delta v_z de un tiempo finito
% En P influye la interpolación.
% Tomaremos P= [Px2 0 0 ] para calcular la perc de ligadura,
% porque le afecta menos el error en Pz
PL = ( M * vGd ) - [ Px2 0 0 ];

% Coeficiente de restitución
coefrest = - ( vs(kimpacto+1,1) - vQd(1) ) / vx0 ;

vGd = cross( wd, [0 0 -c/2 ]);
disp(vGd);


%%
%*************************************************************************
%                            GIRO DEL SÓLIDO                             *
%*************************************************************************

% Ángulos de Euler
% para el informe hay que poner las etiquetas y el título
% para letras griegas, antibarra: \psi, \theta, \phi
% unidades entre cajas: [m] o [rad]
% Tres curvas frente al tiempo: t, f1, t, f2, t, f3
% Recuérdese que en la matriz Euler la primera columna es psi,
% la segunda theta y la tercera phi.
figure
plot(t, Euler(:,1), t, Euler(:,2), t, Euler(:,3) );
legend({'\psi','\theta','\phi'})
grid on;
xlabel('tiempo [s]');
ylabel('\psi, \theta, \phi [rad]');
title('Ángulos de Euler');


% Puede ser interesante representar psi + phi, para evitar
% la singularidad para theta=0
figure
% pintamos psi+phi, reducido a [0,2Pi], y theta
plot( t, wrapTo2Pi(Euler(:,1)+Euler(:,3)), t, Euler(:,2) );
grid on;
legend( { '\psi+\phi', '\theta' } );
xlabel('t [s]');   ylabel('\psi+\phi, \theta [rad]');
title('Singularidades en los ángulos de Euler');

% Matriz de giro.
% La matriz de giro Q10 puede construirse como combinación de tres
% rotationes puras en secuencia z-x-z
% El siguiente bucle calcula y almacena las matrices de rotación para cada
% instante de tiempo en un array de dimensión 3, donde la última dimensión
% corresponde al tiempo y las otras dos son las filas y columnas en el
% sentido usual.
% Puede observarse la notación empleada por Matlab para las matrices y
% vectores:
% 1) se delimitan entre corchetes  [ ]
% 2) como separador de columnas pueden usarse espacios en blanco o una coma ,
% 3) como separador de filas puede usarse usarse un salto de linea o un punto y coma ;
% Siempre que es posible, Matlab aplica los operadores en el sentido
% vectorial. Esto es, Qpsi(1:3,1:3,i)*Qtheta(1:3,1:3,i) corresponde a una
% multiplicación algebraica de 2 matrices (como el matmul de Fortran).
for i=1:length(t)
    Qpsi(1:3,1:3,i) = [ cos(Euler(i,1))     -sin(Euler(i,1))    0
                        sin(Euler(i,1))     cos(Euler(i,1))     0
                        0                   0                   1  ]; %#ok<SAGROW>

    Qtheta(1:3,1:3,i) = [ 1      0                  0
                          0      cos(Euler(i,2))     -sin(Euler(i,2))
                          0      sin(Euler(i,2))     cos(Euler(i,2))  ]; %#ok<SAGROW>

    Qphi(1:3,1:3,i) = [ cos(Euler(i,3))     -sin(Euler(i,3))    0
                        sin(Euler(i,3))     cos(Euler(i,3))     0
                        0                   0                   1  ]; %#ok<SAGROW>

    Q10(1:3,1:3,i) = Qpsi(1:3,1:3,i)*Qtheta(1:3,1:3,i)*Qphi(1:3,1:3,i); %#ok<SAGROW>

end

% Se han calculado las matrices de giro para todos los instantes, y se
% almacenan en la matriz de matrices Q10
% para extraer un valor dado:

valorn=5;
fprintf('Q(%d)=[ \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n ]',...
    valorn, Q10(1,1,valorn), ...
         Q10(1,2,valorn), Q10(1,3,valorn),Q10(2,1,valorn),Q10(2,2,valorn),Q10(2,3,valorn), ...
         Q10(3,1,valorn),Q10(3,2,valorn),Q10(3,3,valorn) );

%si busco la matriz de giro en el primer momento después del choque, veo
%el t en que vx de la bola cambia de signo:
for i=2:length(t)
   if(vs(i,1)>0 && vs(i-1,1)<0)
       valorn=i;
       break
   end
end

%e imprimo la matriz para ese valor de t
fprintf('Q(%d)=[ \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n ]',...
   valorn, Q10(1,1,valorn), ...
        Q10(1,2,valorn), Q10(1,3,valorn),Q10(2,1,valorn),Q10(2,2,valorn),Q10(2,3,valorn), ...
        Q10(3,1,valorn),Q10(3,2,valorn),Q10(3,3,valorn) );


%Para hallar el máximo de theta, se podría hacer:
for i=2:length(t)
   if ( norm(Euler(i,2),2)<norm(Euler(i-1,2),2) )
       kthmas = i-1;
       fprintf('Theta max: %18.15f en instante %d, tmax=%12.9f.\n', Euler(i-1,2), kthmas, t(kthmas) );
       break
   end
end

% Y luego se imprime la matriz como antes, pero con valorn=kthmas

valorn=kthmas;
fprintf('Q(%d)=[ \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n %10.9f, %10.9f, %10.9f \n ]',...
    valorn, Q10(1,1,valorn), ...
         Q10(1,2,valorn), Q10(1,3,valorn),Q10(2,1,valorn),Q10(2,2,valorn),Q10(2,3,valorn), ...
         Q10(3,1,valorn),Q10(3,2,valorn),Q10(3,3,valorn) );

%%
%*************************************************************************
%                           CINÉTICA DEL BLOQUE                          *
%*************************************************************************


% Momento cinético en ejes cuerpo

% El simulador da la velocidad angular del sólido en ejes cuerpo. El
% momento cinético respecto al punto fijo se calculará fácilmente como
% el producto matriz-vector I0*omega
% Pasamos a ejes fijos multiplicando por la matriz de giro
for i=1:size(omega,1)
    HO(i,1:3) = IO*omega(i,:)';         %HO en ejes cuerpo
    HO1(i,1:3) = Q10(:,:,i)*HO(i,:)';   %HO en ejes inerciales
end
% Vemos si se conserva el módulo
ModHO  = sqrt( sum(HO.^2, 2) ); % para cada vector HO, calculamos
% el módulo sumando los cuadrados de la dimensión 2 (x,y,z)
ModHO1 = sqrt( sum(HO1.^2, 2) ); % lo mismo en ejes fijos
% Se comprueba si el módulo de LO ha permanecido invariante ante rotaciones
if any( abs(ModHO1-ModHO)>1e-10 )
    error('El módulo del momento cinético del bloque no ha permanecido invariante ante rotaciones')
else
    disp('INFO: El módulo del momento cinético del bloque ha permanecido invariante ante rotaciones')
end
% plot (t, ModHO-ModHO1)

% Se dibuja el momento cinético.

figure
plot( t, HO );
hold on
plot (t,ModHO);
hold off
legend({'HO_x', 'HO_y' , 'HO_z','|HO|'})
grid on;
xlabel('tiempo[s]');
ylabel('HOx, HOy, HOz [kg*m^2/s]');
title('HO_x, HO_y, HO_z, |HO|');



%veamos la componente z sola, para apreciar si es constante,
%pero solo después de la percusión
% dHO = diff(HO(kimpacto+4:end,3));
figure
plot( t(kimpacto+5:end), HO(kimpacto+5:end,3) );
hold on
% plot (t(kimpacto+5:end),dHO );
hold off
legend({'HO_z','derivada de HOz'})
grid on;
xlabel('tiempo [s]');
ylabel('HO_z [kg*m^2/s]');
title ('HO_Z tras la percusión en ejes cuerpo')

% Ahora el momento cinético en ejes fijos:
figure
plot( t, HO1 )
legend({'HO_x1','HO_y1','HO_z1'})
grid on;
xlabel('tiempo (s)');
ylabel('HO_x1,HO_y1,HO_z1');
title('Momento cinético en ejes fijos');

%
% H_z_1 parece constante, pero junto con las otras no
% se ve bien. La pintamos sola, para ver las variaciones:

figure
plot( t(kimpacto+1:end), HO1(kimpacto+1:end,3) )
legend({'HO_{z_1}'})
grid on;
xlabel('tiempo [s]');
ylabel('HO1_z');
title('Componente z del momento cinetico en ejes fijos');

%calcular el vector k1 proyectado en ejes cuerpo

K1 = [0 ; 0 ; 1];
QT10= pagetranspose(Q10);

for i=1:length(t)
K10(1:3,i) = QT10(:,:,i)*K1;
HOz (i) = HO(i,1:3)*K10(1:3,i);
end

% %comprobar en ejes cuerpo con los datos
% %la ec. de euler es c*diff(omega(:,3))+(b-a)*omega(:,1)*omegayy(i)=0
% CCC = 0;
% for i=1:259
%     AAA (i) = (b-a)*omega(i,1)*omegayy(i);
%     BB = c*diff(omega(:,3));
%
%     CCC(i) = AAA(i) + BB(i);
%
%
% end
% %debería salir 0
% plot(t(1:259),CCC)


figure
plot (t(kimpacto+1:end) ,HOz(kimpacto+1:end))
legend ('HOz')
xlabel ('tiempo [s]');
ylabel('HOz [kg*m^2/s]');
title ('Componente z del momento cinético en ejes inerciales');

% Energía cinética, potencial y mecánica del bloque
% Para la potencial se usa z EN EJES FIJOS
for i=1:size(t)
    EnC(i) = (HO(i,1)*omega(i,1)+HO(i,2)*omega(i,2)+HO(i,3)*omega(i,3))/2;
    Pot(i) = -M*g*c/2*cos(Euler(i,2));
    EnT(i) = EnC(i)+Pot(i);
end

%plot T
figure
plot(t,EnC(:),t,Pot(:),t,EnT(:))
legend('T', 'V', 'E');
grid on;
xlabel('tiempo[s]');
ylabel('Enería[J]');
title('Energía cinética potencial y mecánica');

% No se sabe bien si se conserva, porque las otras son grandes
% pintamos la E sola, desde el primer momento después del choque
% que se ha calculado más arriba

figure
plot(t(kimpacto+1:end),EnT(kimpacto+1:end))
legend('E');
grid on;
xlabel('tiempo [s]');
ylabel('Energía [J]');
title('Energía Mecánica');





